const express = require("express");
const router = express.Router();
const { registerValidator, loginValidator } = require("../validater/validater")
const { register, login } = require("../controller/authController")

router.post('/register', register);
router.post('/login', loginValidator, login);

module.exports = router;
