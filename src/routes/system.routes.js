const express = require('express');
const { login, enableOrDisableUser, getOne, resetPaswwordMail, 
        updatePassword, verifyEmail, getAll, getMe, getAllPets, 
        getOnePet, registerUserPet, registerVet, getSpecialty,
        getAllVet, requestEmailVerification, getAppointment,
        getOneVet} = require('../controllers/system.controllers');
const verifyJWT = require('../middleware/auth.middleware');
const isAdmin = require('../middleware/isAdmin.middleware');
const systemRouter = express.Router();


systemRouter.route("/isadmin")
    .get(isAdmin)

systemRouter.route("/login")
    .post(login)

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
    .get(isAdmin, getAll) //system, requiere middleware de roles
    .post(isAdmin, registerUserPet) //system, requiere middleware de roles

systemRouter.route("/vets")
    .get(isAdmin, getAllVet) //system, requiere middleware de roles
    .post(isAdmin, registerVet) //system, requiere middleware de roles

systemRouter.route("/vets/:id")
    .get(isAdmin, getOneVet) //system, requiere middleware de roles

systemRouter.route("/specialty")
    .get(getSpecialty)

systemRouter.route("/pets")
    .get(isAdmin, getAllPets) //system, requiere middleware de roles
    
systemRouter.route("/appointments")
    .get(isAdmin, getAppointment) //system, requiere middleware de roles

systemRouter.route("/users/:id")
    .get(isAdmin, getOne) //system, requiere middleware de roles
    .delete(isAdmin, enableOrDisableUser) //system, requiere middleware de roles

systemRouter.route("/pets/:id")
    .get(isAdmin, getOnePet) //system, requiere middleware de roles

module.exports = systemRouter