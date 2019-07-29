const express       = require('express');
const morgan        = require('morgan');
const cookieParser  = require('cookie-parser');
const cors 			= require('cors');
require('dotenv').config();

// initialise app
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


// import admin routes
const categoryRoute = require('./routes/admin/category');
const productRoute = require('./routes/admin/product');

// import client routes
const userRoute = require('./routes/client/users');
const userProduct = require('./routes/client/product');

// admin routes middleware
app.use('/api/admin/category', categoryRoute);
app.use('/api/admin/product', productRoute);

// client routes middleware
app.use('/api', userRoute);

app.use('/api/products', userProduct);

// start server
const port = process.env.PORT || 8000;

app.listen(port,()=> {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
