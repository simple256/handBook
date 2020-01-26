const mongoose = require('mongoose');

const Stages = mongoose.model('Stages');

const getAll = (req, res) => {
  Stages.find()
    .exec()
    .then((actions) => res.json(actions))
    .catch((err) => res.status(500).json(err));
};

const get = (req, res) => {
  Stages.findById(req.params.id)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Stages.create(req.body)
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Stages.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Stages.deleteOne({ id: req.params.id })
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
