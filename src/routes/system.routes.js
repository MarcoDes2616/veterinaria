const express = require('express');
const { login, enableOrDisableUser, getOne, resetPaswwordMail, 
        updatePassword, verifyEmail, getAll, getMe, getAllPets, getOnePet } = require('../controllers/system.controllers');
const systemRouter = express.Router();


systemRouter.route("/login")
    .get(login)

systemRouter.route("/me")
    .get(getMe)

systemRouter.route("/reset_password")
    .post(resetPaswwordMail)

systemRouter.route("/reset_password/:token")
    .post(updatePassword)

systemRouter.route("/verify/:token")
    .get(verifyEmail)

systemRouter.route("/users")
    .get(getAll) //system, requiere middleware de roles

systemRouter.route("/pets")
    .get(getAllPets) //system, requiere middleware de roles

systemRouter.route("/users/:id")
    .get(getOne) //system, requiere middleware de roles
    .delete(enableOrDisableUser) //system, requiere middleware de roles

systemRouter.route("/pets/:id")
    .get(getOnePet) //system, requiere middleware de roles

module.exports = systemRouter