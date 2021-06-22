const router = require('express').Router();
const {
  models: { User, Cart }
} = require('../db');
module.exports = router;

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
        'email'
      ],
      include: Cart
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//PUT one User /api/users/:token
router.put('/:token', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.params.token);
    res.send(await user.update(req.body.user));
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
