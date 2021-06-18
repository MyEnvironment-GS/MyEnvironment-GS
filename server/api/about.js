const {
  models: { Biography },
} = require('../db');
const router = require('express').Router();

//GET api/about
router.get('/', async (req, res, next) => {
  try {
    const biography = await Biography.findAll();
    res.send(biography);
  } catch (error) {
    throw error;
  }
});
