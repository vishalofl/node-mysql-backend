
const passport = require('passport');
// JWT Strategy
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
// Local Strategy
const LocalStrategy = require('passport-local').Strategy;

const googlePlusTokenStrategy = require('passport-google-plus-token');

const bcrypt = require('bcryptjs');
// Load User model
const User = require('../models/client/users');
require('dotenv').config();

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['access_token'];
  }
  return token;
}

console.log(process.env.GOOGLE_CLIENT_ID)

// JSON GOOGLE OAUTH TOKENS STRATEGY
passport.use('googleToken', new googlePlusTokenStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, async (accessToken, refreshToken, profile, done) => {
    
    try {

        const existingUser = await User.findByGooleId(profile.id)
        
        if (parseInt(existingUser.length) != 0) {
            return done(null, existingUser);
        }

        const newUser = {
            method:'google',
            first_name:profile.name.givenName,
            last_name:profile.name.familyName,
            email:profile.emails[0].value,
            google_id:profile.id
        }

        await User.insertUser(newUser).then((user) => {
           return done(null, user);
        }).catch((err) => {
            console.log(err);
        });

    } catch(error) {
        done(error, false,error.message);
    }


   


}));





// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
 	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
 	secretOrKey: process.env.JWT_SECRET
  	// passReqToCallback: true
}, async (payload,done) => {
  	try {
    	// Find the user specified in token
		await User.findById(payload.sub).then(user => {
                // If user doesn't exists, handle it
                if(user.length <= 0) {
                    return done(null, false);
                }
                return done(null, user);
            }).catch(err => {
                console.log(err)
            })

  } catch(error) {
    done(error, false);
  }
}));


// Local Startigy for User Login
passport.use( new LocalStrategy({
    usernameField:'email'
}, async(email, password, done)=> {
    try {
    	
        await User.getSingleUsers(email).then(user => {

	        if(user.length <= 0) {
	            return done(null,false, { message: 'Incorrect username.' });
	        }

            // Match password
            bcrypt.compare(password,user[0]['password'], (err, isMatch) => {
                if(err) throw err;
                
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null,false, { message: 'Incorrect password.' });
                }
            });
        })
        .catch((err) =>{
        	console.log(err)
        })
  
  } catch(error) {
    
    done(error, false);
  }
}));

