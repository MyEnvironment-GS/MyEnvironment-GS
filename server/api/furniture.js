const {
  models: { Furniture, User, Cart, ThroughTableCart }
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
    const user = req.body;
    const furniture = await Furniture.findByPk(req.params.id);
    const newUser = await User.findByPk(user.id);
    const cart = await Cart.findOne({
      where: {
        userId: user.id,
        fulfilled: false
      }
    });
    const newInstance = await ThroughTableCart.create({
      cartId: Number(cart.id),
      furnitureId: Number(furniture.id),
      price: Number(furniture.price)
    });
    res.send(newInstance);
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

// POST /api/furniture
router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Furniture.create(req.body);
    res.send(newProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
