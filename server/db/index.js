//this is the access point for all things database related!

const db = require('./db');



const Furniture = require('./models/Furniture');


const DistributionCenters = require('./models/distribution');
const User = require('./models/user.js')


//associations could go here!
// Furniture.belongsTo(Manufacture);
// Manufacture.hasMany(Furniture);

module.exports = {
  db,
  models: {
    User,
    Furniture,
    DistributionCenters,
  },
};
