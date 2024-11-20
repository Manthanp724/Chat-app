const express = require('express');
const { HandleRegister } = require('../Controllers/user.controllers');

const router = express.Router()

router.post("/register" , HandleRegister)


module.exports = router;