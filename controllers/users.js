const User = require('../models/user');

module.exports.getUsers = (req, res) => {
    User.find({})
    .then(users => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}

module.exports.createUser = (req, res) => {
    User.create({ name, email, password})
        .then(user => res.send({ data: user }))
        .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}