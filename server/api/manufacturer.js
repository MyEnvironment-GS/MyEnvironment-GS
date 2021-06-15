const router = require('express').Router()
const { models: { manufacturer }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const Manufacturer = await manufacturer.findAll()
    res.json(Manufacturer)
  } catch (err) {
    next(err)
  }
})
