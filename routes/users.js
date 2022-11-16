const router = require('express').Router();
const User = require('../models/user');

const {  getUsers, createUser } = require('../controllers/users');

router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;
