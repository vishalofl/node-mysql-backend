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
		cb(null,'uploads/product/')
	},
	filename: function(req,file,cb){
		cb(null,Date.now()+file.originalname)
	}
});

const fileFilter = (req,file,cb) => {

	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
		cb(null, true)
	} else {
		cb(null, false)
	}
}


const upload = multer({ 
		storage: storage,
		limits:{
			flieSize:1024*1024*5
		},
		fileFilter:fileFilter 
	});


router.post('/add-new', upload.single('product_img'), productController.addProduct);
router.get('/dashboard', passportJWT, isAdmin, productController.dashboard);

module.exports = router;