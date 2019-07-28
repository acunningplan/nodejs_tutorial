import Joi from "@hapi/joi";

const items = ["patty", "bacon", "cheese"];
const objects = [{ example: "example1" }, { example: "example2" }];

const userInput = {
  address: {
    street: "251333",
    city: "England"
  },
  preferences: objects
};

const addressSchema = Joi.object().keys({
  street: Joi.string()
    .trim()
    .required(),
  city: Joi.string()
    .trim()
    .required()
});

const preferencesSchema = Joi.array().items(
  Joi.object().keys({
    example: Joi.string().required()
  })
);

const schema = Joi.object().keys({
  address: addressSchema,
  preferences: preferencesSchema
});

Joi.validate(userInput, schema, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});
