const {
  models: { Cart, User, ThroughTableCart }
} = require('../db');

const router = require('express').Router();

module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
  } catch (error) {
    throw error;
  }
});

//POST /api/cart
router.post('/', async (req, res, next) => {
  try {
    const newCart = await Cart.create({});
    const user = await User.findByPk(req.body.data.id);
    const userCarts = req.body.data.carts;

    const filteredArray = userCarts.filter(cart => cart.fulfilled === false);

    const oldCart = await Cart.findByPk(filteredArray[0].id);

    await oldCart.update({ fulfilled: true });

    await newCart.setUser(user);

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});
