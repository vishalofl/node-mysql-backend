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


// import routes
const userRoute = require('./routes/users');
const categoryRoute = require('./routes/category');
const productRoute = require('./routes/product');

// routes middleware
app.use('/api', userRoute);
app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);

// start server
const port = process.env.PORT || 8000;

app.listen(port,()=> {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
