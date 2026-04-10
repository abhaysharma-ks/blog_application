const Joi=require('joi')

const Validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    });

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");

      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    req.body = value; // cleaned data
    next();
  };
};



module.exports={Validate}