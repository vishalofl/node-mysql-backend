const pool = require('../db');

module.exports = {

    insertProduct: (postData) => {

        return new Promise((resolve,reject) => {

        	pool.query("INSERT INTO product_master SET ?", postData ,(err,results) => {

        		if (err) {
        			return reject(err);
        		}

        		resolve(results);
        	})

        })
    },
    checkDuplicateProduct: (cat_name) => {
        
        return new Promise((resolve,reject) => {
            
            pool.query("SELECT cat_id FROM category_master WHERE cat_name = ? ",[cat_name],(err,results) => {

                if (err) {
                    return reject(err);
                }
                return resolve(results.length);
            })

        })
    },
}
