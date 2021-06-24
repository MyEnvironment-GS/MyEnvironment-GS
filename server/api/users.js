const router = require('express').Router();
const {
  models: { User, Cart },
} = require('../db');
const { ensureAdmin, isUser } = require('./authentication');

// router.get('/:id', async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findByToken(id);
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

// GET one user /api/users/me
router.get('/me', isUser, async (req, res, next) => {
  try {
    console.log('users route');
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});
//GET all USERS /api/users/
router.get('/', [isUser, ensureAdmin], async (req, res, next) => {
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

// router.put('/:token', async (req, res, next) => {
//   try {
//     const user = await User.findByToken(req.params.token);
//     res.send(await user.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

router.put('/me', isUser, async (req, res, next) => {
  try {
    console.log(req.headers.authorization)
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.update(req.body.information));
  } catch (error) {
    next(error);
  }
});

router.put('/', [isUser, ensureAdmin], async (req, res, next) => {
  try {
    console.log(req.headers.authorization)
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

//POST one User /api/users/
router.post('/', [isUser, ensureAdmin], async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

// // //PUT /api/users update user admin
// router.put('/:id', [isUser, ensureAdmin], async (req, res, next) => {
//   try {
//     const userToUpdate = await User.findByPk(req.params.id);
//     res.send(await userToUpdate.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

router.delete('/:id', [isUser, ensureAdmin], async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
