const router = require('express').Router();
const usersRouter = require('./users');
const ordersRouter = require('./orders');

router.use('/my-account', usersRouter);
router.use('/orders', ordersRouter);

module.exports = router;
