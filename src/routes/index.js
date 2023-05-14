const express = require('express');
const userRouter = require('./user.routes');
const petRouter = require('./pet.routes');
const vetRouter = require('./vet.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", userRouter)

router.use("/pets", petRouter)

router.use("/vet", vetRouter)


module.exports = router;