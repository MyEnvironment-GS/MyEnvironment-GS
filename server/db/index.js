//this is the access point for all things database related!

const db = require('./db');

const Furniture = require('./models/furniture.js');
const DistributionCenters = require('./models/distribution.js');
const User = require('./models/user.js');
const Manufacturer = require('./models/manufacturer.js');
const ThroughTableCart = require('./models/throughTableCart.js');
const Cart = require('./models/cart.js');
const Biography = require('./models/biography.js');

//associations could go here!

Furniture.belongsTo(Manufacturer);
Manufacturer.hasMany(Furniture);
Cart.belongsTo(User);
User.hasMany(Cart);
Furniture.belongsToMany(Cart, { through: ThroughTableCart });
Cart.belongsToMany(Furniture, { through: ThroughTableCart });

module.exports = {
  db,
  models: {
    Manufacturer,
    User,
    Furniture,
    DistributionCenters,
    ThroughTableCart,
    Cart,
    Biography,
  },
};
