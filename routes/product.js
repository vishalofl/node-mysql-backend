const express = require('express');
const router = express.Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');
const passport = require('passport');
const { validateBody, schemas } = require('../helpers/routeHelpers');
const productController = require('../controller/product');

const passportJWT = passport.authenticate('jwt', { session: false });
const { isAuth, isAdmin } = require('../auth/auth');

//Login page

const multer = require('multer');

const storage = multer.diskStorage({
	destination : function(req,file,cb){
		cb(null, 'uploads/')
	}
});

const upload = multer({ storage: storage });


router.post('/add-new', upload.single('product_img'), productController.addProduct);
router.get('/dashboard', passportJWT, isAdmin, productController.dashboard);

module.exports = router;