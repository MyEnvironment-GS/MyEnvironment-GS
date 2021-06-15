//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Furniture = require('./models/Furniture');

//associations could go here!
// Furniture.belongsTo(Manufacture);
// Manufacture.hasMany(Furniture);

module.exports = {
  db,
  models: {
    User,
    Furniture,
  },
};
