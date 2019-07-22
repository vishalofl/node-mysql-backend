const pool = require('../db');

module.exports = {

    getAllUsers: () => {

        return new Promise((resolve,reject) => {

        	pool.query("SELECT * FROM user_master",(err,results) => {

        		if (err) {
        			return reject(err);
        		}

        		return resolve(results);
        	})

        })
    },

    getSingleUsers: (id) => {
    	
        return new Promise((resolve,reject) => {
        	pool.query("SELECT * FROM user_master WHERE user_id = ? ",[id],(err,results) => {

        		if (err) {
        			return reject(err);
        		}

        		return resolve(results);
        	})

        })
    }
}
