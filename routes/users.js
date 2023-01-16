const router = require('express').Router();
/* const { getUsers } = require('../controllers/users'); */
const { getMyProfile } = require('../controllers/users');

/* router.get('/', getUsers); */
router.get('/', getMyProfile);

module.exports = router;
