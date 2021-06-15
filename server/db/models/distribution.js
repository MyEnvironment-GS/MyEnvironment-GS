const Sequelize = require('sequelize');
const db = require('../db');

const DistributionCenters = db.define('distribution center', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
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
