const {
  models: { Cart, User, ThroughTableCart },
} = require("../db");

const router = require("express").Router();

module.exports = router;

router.get("/:id", async (req, res, next) => {
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


const {isUser} = require("./authentication")

router.use(isUser)

//POST /api/cart
router.post("/", async (req, res, next) => {
  console.log('here')
  try {
    const newCart = await Cart.create({});
    const user = await User.findByPk(req.body.data.id);
    const userCarts = req.body.data.carts;

    const filteredArray = userCarts.filter((cart) => cart.fulfilled === false);

    const oldCart = await Cart.findByPk(filteredArray[0].id);

    await oldCart.update({ fulfilled: true });

    await newCart.setUser(user);

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});
