const Sequelize = require('sequelize');
const db = require('../db');

const ThroughTableCart = db.define('throughTableCart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  price: {
    type: Sequelize.INTEGER
  }
});

module.exports = ThroughTableCart;
