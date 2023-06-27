const Joi = require('joi')

const AuthorValidation = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().empty().required().min(4).messages({
      "string.empty": "FullName should not be an empty field",
      "string.base": "FullName must be a string",
      "string.min": "FullName length must be at least 4 characters long",
      "any.required": "FullName is a required field",
    }),
    bio: Joi.string().empty().required().min(25).messages({
      "string.empty": "Bio should not be an empty field",
      "string.base": "Bio must be a string",
      "string.min": "Bio length must be at least 25 characters length",
      "any.required": "Bio is a required field",
    }),
    email: Joi.string()
      .empty()
      .required()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "Email cannot be an empty field",
        "string.email": "Your email must be a valid email",
        "any.required": "Email is a required field",
      }),
    password: Joi.string()
      .min(8)
      .required()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*/])(?=.{8,})"
        )
      )
      .messages({
        "string.min": "Password length must be at least 8 characters",
        "string.required": "email is a required field",
        "string.pattern.base":
          "Password must contains at least one Lower character, one Upper character, one digit character and one specific character",
      }),
    confirm_password: Joi.any()
      .equal(Joi.ref("password"))
      .required()
      .label("Confirm password")
      .options({
        messages: {
          "any.only": "Confirm password does not match",
          "any.required": "Please confirm your password",
        },
      }),
  });
  return schema.validate(data);
};

module.exports = AuthorValidation;