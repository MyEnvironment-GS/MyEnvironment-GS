const Sequelize = require('sequelize');
const db = require('../db');

const DistributionCenters = db.define('distribution center', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  stock: {
    type: Sequelize.INTEGER
  },
  orders: {
    type: Sequelize.INTEGER
  }
});

module.exports = DistributionCenters;
