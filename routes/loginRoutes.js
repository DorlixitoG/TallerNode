// En tu archivo de rutas (por ejemplo, authRoutes.js)
const express = require("express");
const router = express.Router();
const authController = require("../controllers/loginController");

router.post("/authenticate", authController.login);

module.exports = router;
 