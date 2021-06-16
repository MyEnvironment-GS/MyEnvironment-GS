const Sequelize = require('sequelize')
const db = require('../db')




const Manufacturer = db.define('manufacturer', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  countryOfOrigin: {
    type: Sequelize.ENUM(["Italy", "Germany" ]),
  },
  address: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    unique: true,
  },
  PhoneNumber: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  }
})

module.exports = Manufacturer

