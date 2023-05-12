const express = require('express');
const userRouter = require('./user.routes');
const petRouter = require('./pet.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/api/vi/users", userRouter)

router.use("/api/v1/pets", petRouter)


module.exports = router;