const Sequelize = require('sequelize');
const db = require('../db');

const Furniture = db.define('Furniture', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  manufacture: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  productId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  season: {
    type: Sequelize.ENUM(['Spring', 'Summer', 'Fall', 'Winter']),
  },
  dimensions: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  color: {
    type: Sequelize.STRING,
  },
  style: {
    type: Sequelize.STRING,
  },
  room: {
    type: Sequelize.ENUM([
      'Bedroom',
      'Livingroom',
      'Kitchen',
      'Dining Room',
      'Office',
    ]),
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg',
  },
  stock: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Furniture;
