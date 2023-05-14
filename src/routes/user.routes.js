const { create, update } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../middleware/auth.middleware');
const { createPet } = require('../controllers/pet.controllers');

const userRouter = express.Router();

userRouter.route('/')
    .post(create);

userRouter.route('/pets')
    .post(verifyJWT, createPet);

userRouter.route('/:id')
    .put(verifyJWT, update);

module.exports = userRouter;