const mongoose = require('mongoose');

const History = mongoose.model('History');

const createHistoryItem = (req, res) => {
  History.create(req.body)
    .then((createdItem) => res.json(createdItem))
    .catch((err) => res.status(500).json(err));
};




/*
const getInitialMenu = (req, res) => {
  Category.find({ parent: { $exists: false } })
    .exec()
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
};

const getSubMenu = (req, res) => {
  Category.find({ _id: { $eq: req.params.id } })
    .exec()
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
};
*/
module.exports = {
  createHistoryItem,
  getSubMenu,
};
