const passport = require('passport');
const express = require('express');
const router = express.Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');
const passportConf = require('../../middleware/passport');

const { validateBody, schemas } = require('../../helpers/routeHelpers');

const productController = require('../../controller/client/product');

const passportSignIn = passport.authenticate('local', { session: false });

const passportJWT = passport.authenticate('jwt', { session: false });

const { isAuth, isAdmin } = require('../../auth/auth');

//Login page

// router.post('/signup', validateBody(schemas.registerSchema), userController.signUp);
// router.post('/signin', validateBody(schemas.loginSchema),passportSignIn, userController.signIn);
// router.get('/signout', userController.signOut);

router.get('/', passportJWT, productController.list);

module.exports = router;