
const User = require('../models/users');

module.exports = {

    signUp: async(req,res,next)=> {
        try {

            let results = await User.getAllUsers();
            res.json(results);

        } catch (e) {
            console.log(e);

            res.sendStatus(500);
        }
    },
    getOne: async(req,res,next)=> {
        try {

            let results = await User.getSingleUsers(req.params.id);
            res.json(results);

        } catch (e) {
            console.log(e);

            res.sendStatus(500);
        }
    }
}