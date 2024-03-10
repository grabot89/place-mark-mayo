import Joi from "joi";

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const PlacemarkSpec = {
  name: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().optional(),
  latitude: Joi.number().max(54.36227016318675).min(53.46618549741208).required(),
  longitude: Joi.number().max(-8.572080410440332).min(-10.275894721548646).required(),
  temperature: Joi.number().allow("").max(50).optional(),
};

export const CategorySpec = {
  title: Joi.string().required(),
};
