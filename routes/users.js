const express = require('express');
const router = express.Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');


const userController = require('../controller/users');

//Login page

router.get('/', userController.signUp);
router.get('/one/:id', userController.getOne);

module.exports = router;