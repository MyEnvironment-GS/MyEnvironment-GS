const router = require('express').Router();
const {
  models: { User, Cart },
} = require('../db');
const { ensureAdmin, isUser } = require('./authentication');

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByToken(id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//GET all USERS /api/users/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: [
        'id',
        'username',
        'firstName',
        'lastName',
        'phoneNumber',
        'email',
      ],
      include: Cart,
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.put('/:token', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.params.token);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.get('/:token', async (req, res, next) => {
  try {
    console.log('users route');
    res.send(await User.findByToken(req.params.token));
  } catch (error) {
    next(error);
  }
});

//POST one User /api/users/:token
router.post('/', [isUser, ensureAdmin], async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

// //PUT /api/users update user admin
router.put('/:id', [isUser, ensureAdmin], async (req, res, next) => {
  try {
    const userToUpdate = await User.findByPk(req.params.id);
    res.send(await userToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
