//this is the access point for all things database related!

const db = require('./db');

const Furniture = require('./models/furniture.js');
const DistributionCenters = require('./models/distribution');
const User = require('./models/user.js');
const Manufacturer = require('./models/manufacturer');

//associations could go here!
// Furniture.belongsTo(Manufacture);
// Manufacture.hasMany(Furniture);

module.exports = {
  db,
  models: {
    Manufacturer,
    User,
    Furniture,
    DistributionCenters,
  },
};
