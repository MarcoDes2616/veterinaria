const catchError = require("../utils/catchError");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendMail");
const Pet = require("../models/Pet");
require("dotenv").config();
const bcrypt = require("bcrypt");


//endpoint USUARIOS 1
const create = catchError(async (req, res) => {
  const result = await User.create(req.body);
  const tokenToVerify = jwt.sign({ result }, process.env.TOKEN_SECRET, {
    expiresIn: "24h",
  });
  // se verificó la funcionalidad.. desactivado mientars se desarrolla
  // await sendEmail({
  //   to: result.email,
  //   subject: "Verificación de Email",
  //   html: `
  //   <a href="${req.body.frontBaseUrl}/verify_email/${tokenToVerify}">Click en el enlace para verificar E-mail</a>
  //   `,
  // });
  return res.status(201).json(result);
});

//endpoint USUARIOS 2
const login = catchError(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } }, {include: [Pet]});

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  if (!user.isVerified || !user.status) return res.status(401).json({ message: "User no verified or disabled" });

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) return res.status(401).json({ message: "Invalid credentials" })

  const token = jwt.sign({ user }, process.env.TOKEN_SECRET, {
    expiresIn: "1000h",
  });

  res.json({ user, token });
});

//endpoint USUARIOS 3 paso 1
const resetPaswwordMail = catchError(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ message: "User no found" });
  }
  const tokenToVerify = jwt.sign(
    { user }, // payload
    process.env.TOKEN_SECRET, // clave secreta
    { expiresIn: "1h" } // OPCIONAL: Tiempo en el que expira el token
    );
    await User.update({ resetCode: tokenToVerify }, { where: { id: user.id } });
    await sendEmail({
      to: user.email,
    subject: "Reset password",
    html: `
            <h3>Estas intentanto recuperar tu contraseña</h3>
            <a href="${req.body.frontBaseUrl}/reset_password/${tokenToVerify}">Click en el enlace para reset E-mail</a>
            `,
  });
  res.json({ success: true });
});

//endpoint USUARIOS 3 paso 2
const updatePassword = catchError(async (req, res) => {
  const { token } = req.params;
  const user = await User.findOne({ where: { resetCode: token } });
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const data = jwt.verify(token, process.env.TOKEN_SECRET);

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await User.update(
    { password: hashedPassword, resetCode: null },
    { where: { id: data.user.id } }
  );
  res.status(201).json({ success: true });
});

//endpoint USUARIOS 4 vista
const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.findByPk(id, { include: [Pet] });
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

//endpoint USUARIOS 4 actualizacion de perfil
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { password, ...rest } = req.body;
  const result = await User.update(
    rest, { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

// ENDPOINT DEL SISTEMA
const enableOrDisableUser = catchError(async (req, res) => {
  const {id} = req.params;
  const user = await User.findByPk(id)
  await User.update({ status: !user.status }, { where: { id } });
  return res.status(204).json({success: true});
});

// ENDPOINT DEL SISTEMA usuario logeado
const getMe = catchError(async (req, res) => {
  if(!req.user.status) return res.status(401).json({ message: "Unauthorized" });
  res.json(req.user);
});

// ENDPOINT DEL SISTEMA VERIFICAR EMAIL
const verifyEmail = catchError(async (req, res) => {
  const { token } = req.params;
  const data = jwt.verify(token, process.env.TOKEN_SECRET);
  await User.update({ isVerified: true }, { where: { id: data.result.id } });
  res.json({ success: true });
});

// ENDPOINT DEL SISTEMA OBTENER TODOS LOS USUARIOS
const getAll = catchError(async (req, res) => {
  const results = await User.findAll({ include: [Pet] });
  return res.json(results);
});

module.exports = {
  getAll,
  create,
  getOne,
  enableOrDisableUser,
  update,
  login,
  getMe,
  verifyEmail,
  resetPaswwordMail,
  updatePassword
};
