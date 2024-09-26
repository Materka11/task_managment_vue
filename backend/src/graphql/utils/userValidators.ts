import Joi from "@hapi/joi";

const name = Joi.string().max(255).required().label("Name");
const email = Joi.string().email().required().label("Email");
const surname = Joi.string().max(255).required().label("Surname");
const occupation = Joi.string().max(255).required().label("Occupation");
const password = Joi.string()
  .max(30)
  .min(8)
  .required()
  .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d).*$/)
  .label("Password")
  .messages({
    "string.pattern.base":
      "Must have at least one lowercase letter, one uppercase letter and one digit",
  });

export const loginRules = Joi.object().keys({
  email,
  password,
});

export const registerRules = Joi.object().keys({
  email,
  name,
  surname,
  occupation,
  password,
});
