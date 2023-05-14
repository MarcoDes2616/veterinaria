const { getAll, create, getOne, remove, update } = require('../controllers/vet.controllers');
const express = require('express');

const vetRouter = express.Router();

vetRouter.route('/')
    .get(getAll)
    .post(create);

vetRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = vetRouter;