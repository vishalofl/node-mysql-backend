const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users');

require('dotenv').config();
signToken = (user) => {

    return jwt.sign({
        iss: 'interlink',
        sub: user.insertId,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, process.env.JWT_SECRET);

}


module.exports = {

    signUp: async(req,res,next)=> {
        try {

            let foundUser = await User.checkDuplicateUser(req.body.email);

            if (foundUser > 0) {
                return res.status(403).json({ error: 'Email is already in use'});
            }

            const newUser = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }

            bcrypt.genSalt(10,(err,salt)=> {
                bcrypt.hash(newUser.password,salt,(err,hash) => {
                    if (err) throw err;
                    newUser.password = hash;

                    let userData = User.insertUser(newUser);
                    
                    console.log(userData);
                    res.json(userData);


                    // const token = signToken(userData);
                    // // Send a cookie containing JWT
                    // res.status(200).json({
                    //     success: true,
                    //     token:token
                    // });

                })
            })



        } catch (e) {
            console.log(e);

            res.sendStatus(500);
        }
    },
    signIn: async(req,res,next)=> {
        try {

            let results = await User.getSingleUsers(req.params.id);
            res.json(results);

        } catch (e) {
            console.log(e);

            res.sendStatus(500);
        }
    },
    signOut: async(req,res,next)=> {
        try {

            let results = await User.getSingleUsers(req.params.id);
            res.json(results);

        } catch (e) {
            console.log(e);

            res.sendStatus(500);
        }
    },
    dashboard: async(req,res,next)=> {
        try {

            res.json("dashboard is called");

        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}