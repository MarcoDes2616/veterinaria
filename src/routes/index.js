const express = require('express');
const userRouter = require('./user.routes');
const vetRouter = require('./vet.routes');
const systemRouter = require('./system.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", userRouter)

router.use("/vet", vetRouter)

router.use("/system", systemRouter)


module.exports = router;