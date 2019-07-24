const Joi = require('@hapi/joi');

module.exports = {
    
    validateBody: (schema) => {

        return (req,res,next)=> {

            const result = Joi.validate(req.body, schema);
            
            if (result.error) {

                return res.json({
                        error:result.error.details[0]['message']
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
        authSchema: Joi.object().keys({
            firstname:Joi.string().required(),
            lastname:Joi.string(),
            email:Joi.string().email().required(),
            password: Joi.string().required()
        }),
        
        catSchema: Joi.object().keys({
            cat_name:Joi.string().required()
        })
    }
}
