const { getAll, create, getOne, remove, update, getPetsByUser } = require('../controllers/pet.controllers');
const express = require('express');
const verifyJWT = require('../middleware/auth.middleware');

const petRouter = express.Router();

petRouter.route('/')
    .get(getAll)
    .post(verifyJWT, create);

petRouter.route('/:id')
    .get(verifyJWT, getPetsByUser)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = petRouter;