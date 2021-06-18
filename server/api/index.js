const router = require('express').Router();
module.exports = router;

router.use('/manufacturer', require('./manufacturer'));
router.use('/users', require('./users'));
router.use('/distributioncenters', require('./distributionCenters'));
router.use('/furniture', require('./furniture'));
router.use('/about', require('./about'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
