const {
  models: { Furniture },
} = require('../db');
const router = require('express').Router();

//GET api/furnture
router.get('/', async (req, res, next) => {
  try {
    const furniture = await Furniture.findAll();
    res.json(furniture);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
