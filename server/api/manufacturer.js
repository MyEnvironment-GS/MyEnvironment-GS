const router = require('express').Router()
const { models: { Manufacturer }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const manufacturer = await Manufacturer.findAll()
    res.json(manufacturer)
  } catch (err) {
    next(err)
  }
})
