//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/manufacter')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
  },
}
