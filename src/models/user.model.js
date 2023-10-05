const { Schema, model } = require('mongoose');
//User get involved in auth and user information manipulation
//so the auth and user data has their own endpoint and controller
module.exports = model(
  'User',
  new Schema({
    username: {
      type: String,
      required: true,
      unique: true, // mongoose create unique index in mongodb
    },
    password: {
      type: String,
      required: true,
    },
  })
);
