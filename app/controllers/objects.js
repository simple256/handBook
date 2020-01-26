const mongoose = require('mongoose');

const ObjectsModel = mongoose.model('ObjectsModel');

const getAll = (req, res) => {
  ObjectsModel.find()
    .exec()
    .then((actions) => res.json(actions))
    .catch((err) => res.status(500).json(err));
};

const get = (req, res) => {
  ObjectsModel.findById(req.params.id)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  ObjectsModel.create(req.body)
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  ObjectsModel.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  ObjectsModel.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
