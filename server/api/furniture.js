const {
  models: { Furniture, User }
} = require('../db');
const axios = require('axios');
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
    // console.log(req.params);
    const furniture = await Furniture.findByPk(req.params.id);
    // console.log(furniture);
    res.send(furniture);
  } catch (error) {
    throw error;
  }
});

router.get('/:id/add', async (req, res, next) => {
  try {
    // const user = await axios.get('/auth/me', req.headers.authorization);
    // const furniture = await Furniture.findByPk(furnitureId);
    // console.log(user, '------user');
    res.sendStatus(500);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
