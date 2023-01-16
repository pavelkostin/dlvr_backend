const mongoose = require('mongoose');

const goodSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  price: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model('good', goodSchema);
