const express = require('express');
const router = express.Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');
const passport = require('passport');
const { validateBody, schemas } = require('../helpers/routeHelpers');
const categoryController = require('../controller/category');

const passportJWT = passport.authenticate('jwt', { session: false });
const { isAuth, isAdmin } = require('../auth/auth');

//Login page

router.post('/add-new', validateBody(schemas.catSchema), categoryController.addCategory);
router.get('/dashboard', passportJWT, isAdmin, categoryController.dashboard);

module.exports = router;