const mongoose = require('mongoose');

const Actors = mongoose.model('Actors');

const getAll = (req, res) => {
  Actors.find()
    .exec()
    .then((actions) => res.json(actions))
    .catch((err) => res.status(500).json(err));
};

const get = (req, res) => {
  Actors.findById(req.params.id)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Actors.create(req.body)
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Actors.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Actors.deleteOne({ id: req.params.id })
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
