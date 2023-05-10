const express = require('express');
const userRouter = require('./user.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/api/vi/users", userRouter)


module.exports = router;