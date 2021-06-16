const { Furniture } = require('../db');
const router = require('express').Router();

//GET api/furnture
router.get('/', async (req, res, next) => {
  try {
    const furniture = Furniture.findAll();
    res.send(furniture);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
