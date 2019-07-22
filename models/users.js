const pool = require('../db');

module.exports = {

    insertUser: (postData) => {

        return new Promise((resolve,reject) => {

        	pool.query("INSERT INTO user_master SET ?", postData ,(err,results) => {

        		if (err) {
        			return reject(err);
        		}

        		return resolve(results);
        	})

        })
    },

    checkDuplicateUser: (email) => {
    	
        return new Promise((resolve,reject) => {
            
        	pool.query("SELECT id FROM user_master WHERE email = ? ",[email],(err,results) => {

        		if (err) {
        			return reject(err);
        		}
        		return resolve(results.length);
        	})

        })
    }
}
