const { getAll, create, getOne, remove, update, getPetsByUser} = require("../controllers/pet.controllers");
const express = require("express");
const verifyJWT = require("../middleware/auth.middleware");

const petRouter = express.Router();

petRouter.route("/")
    .get(getAll)
    .post(verifyJWT, create);

petRouter.route("/:id")
    .delete(verifyJWT, remove)
    .put(verifyJWT, update)
    .get(getOne)

petRouter.route("/:id/users")
    .get(verifyJWT, getPetsByUser);
module.exports = petRouter;
