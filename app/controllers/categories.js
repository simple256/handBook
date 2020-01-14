const mongoose = require('mongoose');

const Category = mongoose.model('Category');

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

const getAll = (req, res) => {
  Category.find()
    .exec()
    .then((category) => res.json(products))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Category.create(req.body)
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Category.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((category) => res.json(category))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Category.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getInitialMenu,
  getSubMenu,
  getAll,
  create,
  update,
  remove,
};
