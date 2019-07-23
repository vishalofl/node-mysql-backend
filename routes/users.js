const passport = require('passport');
const express = require('express');
const router = express.Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');
const passportConf = require('../middleware/passport');
const { validateBody, schemas } = require('../helpers/routeHelpers');
const userController = require('../controller/users');

const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });
const { isAuth, isAdmin } = require('../auth/auth');

//Login page

router.post('/signup', validateBody(schemas.authSchema), userController.signUp);
router.post('/signin', passportSignIn, isAuth ,userController.signIn);
router.get('/signout', userController.signOut);
router.get('/dashboard', passportJWT, isAdmin, userController.dashboard);

module.exports = router;