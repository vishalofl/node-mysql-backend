const pool = require('../db');

module.exports = {

    insertCategory: (postData) => {

        return new Promise((resolve,reject) => {

        	pool.query("INSERT INTO category_master SET ?", postData ,(err,results) => {

        		if (err) {
        			return reject(err);
        		}

        		resolve(results);
        	})

        })
    },
    checkDuplicateCategory: (cat_name) => {
        
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
