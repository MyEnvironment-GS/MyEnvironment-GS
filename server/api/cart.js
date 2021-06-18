const {
  models: { Cart }
} = require('../db');
const {
  models: { ThroughTableCart }
} = require('../db');
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
