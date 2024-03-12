import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");
                                                                                
  export const UserSpec = UserCredentialsSpec.keys({
    firstName: Joi.string().example("Homer").required(),
    lastName: Joi.string().example("Simpson").required(),
  }).label("UserDetails");

  export const UserSpecPlus = UserSpec.keys({
    _id: IdSpec,
    __v: Joi.number(),
  }).label("UserDetailsPlus");

  export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PlacemarkSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Croagh Patrick"),
    category: Joi.string().required().example("Mountains"),
    description: Joi.string().required().example("Mayo's most famous mountain"),
    image: Joi.string().optional(),
    latitude: Joi.number().max(54.36227016318675).min(53.46618549741208).required().example(53.76134971389955),
    longitude: Joi.number().max(-8.572080410440332).min(-10.275894721548646).required().example(-9.659762649313736),
    temperature: Joi.number().allow("").max(50).optional().example(14),
    categoryid: IdSpec,
  })
  .label("Placemark");

export const PlacemarkSpecPlus = PlacemarkSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacemarkPlus");

export const PlacemarkArraySpec = Joi.array().items(PlacemarkSpecPlus).label("PlacemarkArray");

export const CategorySpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Mountains"),
    userid: IdSpec,
    placemarks: PlacemarkArraySpec,
  })
  .label("Category");

export const CategorySpecPlus = CategorySpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("CategoryPlus");

export const CategoryArraySpec = Joi.array().items(CategorySpecPlus).label("CategoryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");