const express = require('express');
const router = express.Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const userController = require('../controller/users');

//Login page

router.post('/signup', validateBody(schemas.authSchema), userController.signUp);
router.post('/signin', userController.signIn);
router.get('/signout', userController.signOut);
router.get('/dashboard', userController.dashboard);

module.exports = router;