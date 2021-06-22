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
    next(error);
  }
});

router.post('/add/:id', async (req, res, next) => {
  try {
    console.log('hit routeeeeeeeee');
    const token = req.body.token;
    console.log(token, 'token in route');
    const user = await axios.get(`/api/users/${token}`);
    console.log(user);
    const furniture = await Furniture.findByPk(furnitureId);
    const cart = await user.getCart();
    // console.log(cart);
    res.sendStatus(201);
    // const cart = await axios.get(`/api/cart/${}`)
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const furniture = await Furniture.findByPk(req.params.id);
    res.send(furniture);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
