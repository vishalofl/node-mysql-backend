
const Category = require('../models/category');

require('dotenv').config();

module.exports = {

    addCategory: async(req,res,next)=> {
        try {

            let foundCategory = await Category.checkDuplicateCategory(req.body.cat_name).then((category) => {
                return category;
            }).catch(err => console.log(err));


            if (foundCategory > 0) {
                return res.status(403).json({ error: 'Category Name is already in use'});
            }

            const newCategory = {
                cat_name:req.body.cat_name,
            }

            console.log(foundCategory);

            Category.insertCategory(newCategory).then((category) => {

                res.status(200).json({
                    success: true
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