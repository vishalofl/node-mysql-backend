const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/client/users');

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

            let foundUser = await User.checkDuplicateUser(req.body.email).then((users)=>{
                return users;
            }).catch(err => console.log(err));

            if (foundUser > 0) {

                res.setHeader('Content-Type', 'application/json');
                return res.json({ error: 'Email is already in use'});
            }

            const newUser = {
                method:'local',
                email:req.body.email,
                password:req.body.password
            }

            bcrypt.genSalt(10,(err,salt)=> {
                bcrypt.hash(newUser.password,salt,(err,hash) => {
                    if (err) throw err;
                    newUser.password = hash;

                    User.insertUser(newUser).then((user) => {
                        const token = signToken(user);

                        // Send a cookie containing JWT
                        res.cookie('access_token', token, {
                            httpOnly: true
                        });

                        res.setHeader('Content-Type', 'application/json');
                        res.status(200).json({
                            success: true,
                            token:token,
                            message:"user created successfully!"
                        });

                    }).catch((err) =>{
                        console.log(err);
                    }); ;
                })
            })

        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
    signIn: async(req,res,next)=> {
        try {
            // console.log(req.user[0]['id']);
            
            const token = signToken({insertId:req.user[0]['id']});

            res.cookie('access_token', token, {
                httpOnly: true
            });

            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ 
                success: true, 
                token:token,
            });

        } catch (e) {
            res.sendStatus(500);
        }
    },
    googleSignIn: async(req,res,next)=> {
        try {
            
            console.log(req.user);

            if (!req.user.insertId) 
            {
                var user_id = req.user[0]['id'];
            }
            else
            {
                var user_id = req.user.insertId;
            }

            const token = signToken({insertId:user_id});

            res.status(200).json({ 
                success: true, 
                token:token,
            });

        } catch (e) {
            res.sendStatus(500);
        }
    },
    signOut: async(req,res,next)=> {
        try {

            res.clearCookie('access_token');
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json({ 
                message: 'sign out success'
            });

        } catch (e) {
            console.log(e);
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