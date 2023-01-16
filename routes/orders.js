const router = require('express').Router();

const { getOrders } = require('../controllers/orders');
const { createOrder } = require('../controllers/orders');

router.get('/', getOrders);
router.post('/', createOrder);

module.exports = router;
