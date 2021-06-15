//this is the access point for all things database related!

const db = require('./db');


const DistributionCenters = require('./models/distribution');
const User = require('./models/user.js')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    DistributionCenters
  }
};
