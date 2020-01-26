const mongoose = require('mongoose');

const Projects = mongoose.model('Projects');

const getAll = (req, res) => {
  Projects.find()
    .exec()
    .then((actions) => res.json(actions))
    .catch((err) => res.status(500).json(err));
};

const get = (req, res) => {
  Projects.findById(req.params.id)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Projects.create(req.body)
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Projects.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action) => res.json(action))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Projects.deleteOne({ id: req.params.id })
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
