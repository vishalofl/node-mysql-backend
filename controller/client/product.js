
const Product = require('../../models/client/product');

require('dotenv').config();

module.exports = {

    list: async(req,res,next)=> {
        try {

            let params = req.query;

            let products = await Product.getProductList(params);


            console.log(products);


            // res.setHeader('Content-Type', 'application/json');
            // res.status(200).json({
            //     success: true,
            //     message:"data get successfully!",
            //     data: products
            // });


        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
    signIn: async(req,res,next)=> {
        try {
            // console.log(req.user[0]['id']);
            
            const token = signToken({insertId:req.user[0]['id']});

            res.cookie('access_token', token, {
                httpOnly: true
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ 
                success: true, 
                token:token,
            });

        } catch (e) {
            res.sendStatus(500);
        }
    },
    signOut: async(req,res,next)=> {
        try {

            res.clearCookie('access_token');
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json({ 
                message: 'sign out success'
            });

        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
    dashboard: async(req,res,next)=> {
        try {
            // console.log(req.user);
            res.json("dashboard is called");

        } catch (e) {
            
            console.log(e);
            res.sendStatus(500);
        }
    }
}