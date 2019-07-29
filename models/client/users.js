const connection = require('../../db/dbconnection');

module.exports = {

    insertUser: (postData) => {

        return new Promise((resolve,reject) => {

        	connection.query("INSERT INTO user_master SET ?", postData ,(err,results) => {

        		if (err) {
        			return reject(err);
        		}

        		resolve(results);
        	})

        })
    },

    checkDuplicateUser: (email) => {
    	
        return new Promise((resolve,reject) => {
            
        	connection.query("SELECT id FROM user_master WHERE email = ? ",[email],(err,results) => {

        		if (err) {
        			return reject(err);
        		}
        		return resolve(results.length);
        	})

        })
    },
    getSingleUsers: (email) => {
        
        return new Promise((resolve,reject) => {
            
            connection.query("SELECT id,role_id,name,email,password FROM user_master WHERE email = ? ",[email],(err,results) => {

                if (err) {
                    return reject(err);
                }
                return resolve(results);
            })

        })
    },
    findById: (id) => {
        
        return new Promise((resolve,reject) => {
            
            connection.query("SELECT id,role_id,name,email,password FROM user_master WHERE id = ? ",[id],(err,results) => {

                if (err) {
                    return reject(err);
                }
                return resolve(results);
            })

        })
    }
}
