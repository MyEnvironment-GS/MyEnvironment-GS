const Sequelize = require('sequelize');
const db = require('../db');

const Biography = db.define('biography', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
    description: {
      type: Sequelize.TEXT,
    },
    imageUrl: {
      type: Sequelize.TEXT,
      defaultValue:
        'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg',
    },
  },
});

module.exports = Biography;
