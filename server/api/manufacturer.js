const router = require('express').Router()
const { models: { manufacturer }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const manufacturer = await User.findAll()
    res.json(manufacturer)
  } catch (err) {
    next(err)
  }
})
