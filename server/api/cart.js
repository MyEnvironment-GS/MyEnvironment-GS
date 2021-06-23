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

router.delete('/', async (req, res, next) => {
  try {
    console.log(req.body)
    const furnitureId = req.body.information.id
    const cartId = req.body.information.cartId

    const cartInstance = await ThroughTableCart.findOne({
      where: {
        furnitureId: furnitureId,
        cartId: cartId
      }
    })

    const cart = await Cart.findOne({
      where: {
        id: cartId
      }
    })
    const user = await cart.getUser()
    const allCarts = await user.getCarts()
    await cartInstance.destroy()
    res.send(allCarts)
  } catch (error) {
    next(error);
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
      await instance.update({
        quantity: Number(item.throughTableCart.quantity),
        price: itemDetails.price
      });
    });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

