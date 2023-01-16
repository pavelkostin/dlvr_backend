const Order = require('../models/order');

function getOrders(req, res, next) {
  Order.find({})
    .then((orders) => {
      res
        .status(200)
        .send(orders);
    })
    .catch((error) => { next(error); });
}

function createOrder(req, res) {
  const {
    orderId, date, name, address, tel, sumOfMoney, positions,
  } = req.body;
  const owner = req.user._id;
  Order.create({
    orderId, date, name, address, tel, sumOfMoney, positions, owner,
  })
    .then((data) => {
      res
        .send({ data });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные.' });
      }
      return res.status(500).send({ message: err.message });
    });
}

module.exports = {
  createOrder,
  getOrders,
};
