const {
  models: { Furniture },
} = require('../db');
const router = require('express').Router();

//GET api/furniture
router.get('/', async (req, res, next) => {
  try {
    const furniture = await Furniture.findAll();
    res.send(furniture);
  } catch (error) {
    throw error;
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    console.log(req.params);
    const furniture = await Furniture.findByPk(req.params.id);
    console.log(furniture);
    res.send(furniture);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
