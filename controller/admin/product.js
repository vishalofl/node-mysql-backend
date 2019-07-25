const multer = require('multer');

const Product = require('../../models/admin/product');

require('dotenv').config();

/*image upload*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const limits = {

  fileSize: 1024 * 1024 * 3

};

const fileFilter = function(req, file, cb) {

    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb({message: "Only image files are allowed!"}, false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    limits: limits,
    fileFilter: fileFilter
});

const productUpload = upload.single('productimg');

module.exports = {

    addProduct: async(req,res,next)=> {
        try {

            productUpload(req, res, function (err) {

                if (err) {
                    return res.status(403).json({ error: err});
                } 

                // Everything went fine.
                const newProduct = {
                    pro_name:req.body.name,
                    pro_price:req.body.price,
                    pro_photo:req.file.filename,
                }

                Product.insertProduct(newProduct).then((product) => {

                    res.status(200).json({
                        success: true,
                        product:product
                    });

                }).catch((err) =>{
                    console.log(err);
                });
            })

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