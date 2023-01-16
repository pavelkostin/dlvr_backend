const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  date: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  tel: {
    type: String,
  },
  sumOfMoney: {
    type: String,
  },
  positions: {

  },
  owner: {
    type: String,
  },
});

module.exports = mongoose.model('order', orderSchema);
