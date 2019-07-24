const express = require('express');
const router = express.Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');
const passport = require('passport');
const { validateBody, schemas } = require('../helpers/routeHelpers');
const productController = require('../controller/product');

const passportJWT = passport.authenticate('jwt', { session: false });
const { isAuth, isAdmin } = require('../auth/auth');

//product page

router.post('/add-new', productController.addProduct);
router.get('/dashboard', passportJWT, isAdmin, productController.dashboard);

module.exports = router;