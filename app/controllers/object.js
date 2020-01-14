const mongoose = require('mongoose');

const ObjectModel = mongoose.model('Object');

const getAll = (req, res) => {
  ObjectModel.find()
    .exec()
    .then((actions) => res.json(actions))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  ObjectModel.create(req.body)
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  ObjectModel.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  ObjectModel.deleteOne({ id: req.params.id })
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
