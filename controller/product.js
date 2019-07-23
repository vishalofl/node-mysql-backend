
const Product = require('../models/product');

require('dotenv').config();


module.exports = {

    addProduct: async(req,res,next)=> {
        try {

            const newProduct = {
                pro_name:req.body.name,
                pro_price:req.body.price,
                pro_photo:req.file.filename,
            }

            // console.log(newProduct);

            Product.insertProduct(newProduct).then((product) => {

                res.status(200).json({
                    success: true,
                    product:product
                });

            }).catch((err) =>{
                console.log(err);
            });

        } catch (e) {
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