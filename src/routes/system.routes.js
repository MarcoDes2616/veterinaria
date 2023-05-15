const express = require('express');
const { login, enableOrDisableUser, getOne, resetPaswwordMail, 
        updatePassword, verifyEmail, getAll, getMe, getAllPets, 
        getOnePet, registerUserPet, registerVet, getSpecialty,
        getAllVet, 
        requestEmailVerification,
        getAppointment} = require('../controllers/system.controllers');
const verifyJWT = require('../middleware/auth.middleware');
const systemRouter = express.Router();


systemRouter.route("/login")
    .get(login)

systemRouter.route("/me")
    .get(verifyJWT, getMe)

systemRouter.route("/reset_password")
    .post(resetPaswwordMail)

systemRouter.route("/reset_password/:token")
    .post(updatePassword)

systemRouter.route("/verify_email")
    .post(requestEmailVerification)

systemRouter.route("/verify_email/:token")
    .get(verifyEmail)

systemRouter.route("/users")
    .get(getAll) //system, requiere middleware de roles
    .post(registerUserPet) //system, requiere middleware de roles

systemRouter.route("/vets")
    .get(getAllVet) //system, requiere middleware de roles
    .post(registerVet) //system, requiere middleware de roles

systemRouter.route("/specialty")
    .get(getSpecialty)

systemRouter.route("/pets")
    .get(getAllPets) //system, requiere middleware de roles
    
systemRouter.route("/appointments")
    .get(getAppointment) //system, requiere middleware de roles

systemRouter.route("/users/:id")
    .get(getOne) //system, requiere middleware de roles
    .delete(enableOrDisableUser) //system, requiere middleware de roles

systemRouter.route("/pets/:id")
    .get(getOnePet) //system, requiere middleware de roles

module.exports = systemRouter