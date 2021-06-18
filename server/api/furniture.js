const {
  models: { Furniture }
} = require('../db');
const router = require('express').Router();

//GET api/furnture
router.get('/', async (req, res, next) => {
  try {
    const furniture = await Furniture.findAll();
    res.json(furniture);
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

// router.post('/:id', async (req, res, next) => {
//   try {
//     const token = window.localStorage.getItem('token');
//     console.log(token, 'token');
//     const user = await User.findByToken(token);
//     console.log(user, 'user---------');
//     // user.Cart.build({ });
//     res.send(user);
//   } catch (error) {
//     throw error;
//   }
// });

// router.get('/usercart', async (req, res, next) => {
//   try {
//     console.log('TEST');
//     const token = window.localStorage.getItem('token');
//     console.log(token, 'token');
//     const user = await User.findByToken(token);
//     console.log(user, 'user---------');
//     res.send(user);
//   } catch (error) {
//     throw error;
//   }
// });

router.post('/:id/', async (req, res, next) => {
  try {
    const inst = await ThroughTableCart.findOrCreate({
      where: { furnitureId: }
    });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
