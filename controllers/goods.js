const Good = require('../models/goods');

function getGoods(req, res, next) {
  Good.find({})
    .then((goods) => {
      res.status(200).send(goods);
    })
    .catch((error) => { next(error); });
}

module.exports = {
  getGoods,
};
