const connection = require('../../db/');

module.exports = {

    getProductList: (queryParams) => {

        return new Promise((resolve,reject) => {

            let order   = queryParams.order ? queryParams.order : 'asc';
            let sortBy  = queryParams.sortBy ? queryParams.sortBy : 'id';
            let limit   = queryParams.limit ? parseInt(queryParams.limit) : 5 ;

            let sql = "SELECT * FROM product_master order by ? = ? limit ?";

            connection.query(sql,[sortBy, order, limit], function(err, results, fields) {

                if (err) {

                    return reject(err);
                }
                resolve(results);
            });

        })
    }
}
