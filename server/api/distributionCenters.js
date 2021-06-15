const router = require('express').Router();
const {
  models: { DistributionCenters }
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const distributionCenters = await DistributionCenters.findAll();
    res.json(distributionCenters);
  } catch (error) {
    next(error);
  }
});
