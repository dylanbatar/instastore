import { Joi, Segments } from 'celebrate';

export const registerConvenienceValidation = {
  [Segments.BODY]: Joi.object().keys({
    storeId: Joi.string().required(),
    storeName: Joi.string().required(),
    isOpen: Joi.boolean().required(),
    coordinates: Joi.object().keys({
      lat: Joi.number().required(),
      lng: Joi.number().required()
    })
  })
};

export const getConvencienceValidation = {
  [Segments.BODY]: Joi.object().keys({
    coordinates: Joi.object().keys({
      lat: Joi.number().required(),
      lng: Joi.number().required()
    }).required()
  })
};
