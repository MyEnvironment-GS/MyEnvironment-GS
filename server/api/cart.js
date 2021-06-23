const {
  models: { Cart, User, ThroughTableCart }
} = require('../db');
const Furniture = require('../db/models/furniture');

const router = require('express').Router();

module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
  } catch (error) {
    throw error;
  }
});

const { isUser } = require('./authentication');

router.use(isUser);

//POST /api/cart
router.post('/', async (req, res, next) => {
  try {
    const newCart = await Cart.create({});
    const user = await User.findByPk(req.body.user.data.id);
    const userCarts = req.body.user.data.carts;

    const filteredArray = userCarts.filter(cart => cart.fulfilled === false);

    const oldCart = await Cart.findByPk(filteredArray[0].id);

    await oldCart.update({ fulfilled: true });

    await newCart.setUser(user);

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

//Update cart
router.put('/', async (req, res, next) => {
  try {
    const cartId = req.body.activeCart.id;
    const furniture = req.body.activeCart.furniture;

    furniture.forEach(async item => {
      const itemId = item.id;
      const itemDetails = await Furniture.findByPk(itemId);
      const instance = await ThroughTableCart.findOne({
        where: {
          cartId: cartId,
          furnitureId: itemId
        }
      });
      console.log(await instance.update({
        quantity: Number(item.throughTableCart.quantity),
        price: itemDetails.price
      }));
    });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const furnitureId = req.body;
    const cartId = req.body.activeCart.id;
    const instance = await ThroughTableCart.findOne({
      where: {
        cartId: cartId,
        furnitureId: furnitureId
      }
    });
    await instance.destroy();
    res.send(instance);
  } catch (error) {
    next(error);
  }
});
