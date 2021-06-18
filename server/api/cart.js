const {
  models: { Cart, User }
} = require('../db');
const {
  models: { ThroughTableCart }
} = require('../db');
const me = require('../../client/store/auth');
const router = require('express').Router();

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
  } catch (error) {
    throw error;
  }
});

// router.put('/:id', async (req, res, next) => {
//   try {
//     const cart = await ThroughTableCart.findByPk(req.params.id);
//     res.send(await cart.update(req.body, { fields: furnitureId }));
//   } catch (error) {
//     throw error;
//   }
// });

router.post('/:id', async (req, res, next) => {
  try {
    const user = await User.findByToken(window.localStorage.getItem('token'));
    console.log(user);
    // user.Cart.build({ });
  } catch (error) {
    throw error;
  }
});
