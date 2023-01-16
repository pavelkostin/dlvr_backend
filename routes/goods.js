const router = require('express').Router();

const { getGoods } = require('../controllers/goods');

router.get('/', getGoods);

module.exports = router;
