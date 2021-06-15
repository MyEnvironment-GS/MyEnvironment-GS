const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const axios = require('axios');



const Manufacturer = db.define('manufacturer', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  countryOfOrigin: {
    type: Sequelize.ENUM(),
  },
  address: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    unique: true,
  },
  PhoneNumber: {
    type: Sequelize.INTEGER,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Manufacturer

