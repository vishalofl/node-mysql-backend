const connection = require('../../db/');

module.exports = {

    insertUser: (postData) => {

        return new Promise((resolve,reject) => {

        	connection.query("INSERT INTO ol_client_master SET ?", postData ,(err,results) => {

        		if (err) {
        			return reject(err);
        		}

        		resolve(results);
        	})

        })
    },

    checkDuplicateUser: (email) => {

        return new Promise((resolve,reject) => {

        	connection.query("SELECT id FROM ol_client_master WHERE email = ? ",[email],(err,results) => {

        		if (err) {
        			return reject(err);
        		}
        		return resolve(results.length);
        	})

        })
    },

    getSingleUsers: (email) => {
        
        return new Promise((resolve,reject) => {
            
            connection.query("SELECT id,first_name,last_name,email,password FROM ol_client_master WHERE email = ? ", [email], (err,results) => {

                if (err) {
                    return reject(err);
                }
                return resolve(results);
            })

        })
    },

    findById: (id) => {
        
        return new Promise((resolve,reject) => {
            
            connection.query("SELECT id,first_name,last_name,email,password FROM ol_client_master WHERE id = ? ",[id],(err,results) => {

                if (err) {
                    return reject(err);
                }

                return resolve(results);
            })

        })
    }
}
