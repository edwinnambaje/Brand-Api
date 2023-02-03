const Joi=require('joi');

const blogSchema = Joi.object().keys({
    title:Joi.string().min(10).required(),
    desc:Joi.string().required(),
    image:Joi.any().required()
})
module.exports={blogSchema}