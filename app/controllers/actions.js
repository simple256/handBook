const mongoose = require('mongoose');

const Actions = mongoose.model('Actions');

const getAll = (req, res) => {
  Actions.find()
    .exec()
    .then((actions) => res.json(actions))
    .catch((err) => res.status(500).json(err));
};

const get = (req, res) => {
  Actions.findById(req.params.id)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Actions.create(req.body)
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Actions.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Actions.deleteOne({ id: req.params.id })
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
