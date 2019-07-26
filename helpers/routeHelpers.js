const Joi = require('@hapi/joi');

module.exports = {
    
    validateBody: (schema) => {

        return (req,res,next)=> {

            const result = Joi.validate(req.body, schema, {allowUnknown: true });
            
            if (result.error) {

                const errorString = result.error.details[0]['message'];
                const errorMsg = errorString.replace(/[^a-z\d\s]+/gi, "");

                return res.json({
                        error:errorMsg
                    });
            }

            if (!req.value) {

                req.value = {}
            }
            
            req.value['body'] = result.value;

            next();
        }
    },

    schemas:{
        registerSchema: Joi.object().keys({
            firstname:Joi.string().required().label("First Name"),
            email:Joi.string().email().required().label("Email"),
            password: Joi.string().min(3).max(10).required().label("Password"),
        }),
        loginSchema: Joi.object().keys({
            email:Joi.string().email().required().label("Email"),
            password: Joi.string().min(3).max(10).required().label("Password"),
        }),
        
        catSchema: Joi.object().keys({
            cat_name:Joi.string().required()
        })
    }
}
