const mongoose = require('mongoose');

const History = mongoose.model('History');

const createHistoryItem = (req, res) => {
  History.create(req.body)
    .then((createdItem) => res.json(createdItem))
    .catch((err) => res.status(500).json(err));
};

const getAllVersions = (req, res) => {
  History.find({ history_object_id: { $eq: req.id } })
    .exec()
    .then((versions) => res.json(versions.sort((a, b) => a.creationDate < b.creationDate)))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  createHistoryItem,
  getAllVersions,
};
