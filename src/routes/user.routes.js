const { getAll, create, getOne, enableOrDisableUser, update, login, getMe, verifyEmail, resetPaswwordMail, updatePassword } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../middleware/auth.middleware');

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll) //system, requiere middleware de roles
    .post(create);

userRouter.route("/login")
    .post(login)

userRouter.route("/me")
    .get(verifyJWT, getMe) // system, requiere autenticacion

userRouter.route("/reset_password")
    .post(resetPaswwordMail)

userRouter.route("/reset_password/:token")
    .post(updatePassword)

userRouter.route("/verify/:token")
    .get(verifyEmail)

userRouter.route('/:id')
    .get(getOne) //system, requiere middleware de roles
    .delete(enableOrDisableUser) //system, requiere middleware de roles
    .put(verifyJWT, update);

module.exports = userRouter;