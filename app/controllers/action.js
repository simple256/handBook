const mongoose = require('mongoose');

const Action = mongoose.model('Action');

const getAll = (req, res) => {
  Action.find()
    .exec()
    .then((actions) => res.json(actions))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Action.create(req.body)
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Action.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Action.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
