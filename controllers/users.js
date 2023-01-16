const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');

/* function getUsers(req, res, next) {
  User.find({})
    .then((users) => {
      res
        .status(200)
        .send(users);
    })
    .catch((error) => { next(error); });
} */

function createUser(req, res, next) {
  const { username, password, email } = req.body;
  return User.findOne({ email })
    .then((e) => {
      if (e) {
        throw new ConflictError('Вы пытаетесь зарегистрироваться по уже существующему в базе email.');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => {
      User.create({ username, password: hash, email })
        .then((user) => {
          res
            .send({ user });
        });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные.'));
      } else {
        next(err);
      }
    });
}

function loginUser(req, res, next) {
  const { email, password } = req.body;

  // ищем по почте
  return User.findOne({ email })

    .then((user) => {
      if (!user) {
        return Promise.reject(new BadRequestError('Неправильные почта или пароль'));
      }

      // сравниваем пароль в теле и пароль в бд
      return bcrypt.compare(password, user.password)

        .then((matched) => {
          if (!matched) {
            return Promise.reject(new BadRequestError('Неправильные почта или пароль'));
          }
          return user;
        });
    })

  // создаем токен

    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.send({ token });
    })

    .catch((error) => { next(error); });
}

function getMyProfile(req, res, next) {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError('Пользователь не найден.');
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => { next(error); });
}

module.exports = {
  createUser,
  loginUser,
  getMyProfile,
};
