const mongoose = require('mongoose');

const Stages = mongoose.model('Stages');
const Operations = mongoose.model('Operations');

async function getStages(stagesIdArray) {
  const result = [];
  for (const stage of stagesIdArray) {
    const receivedItem = await Operations.findById(stage)
      .exec()
      .then((item) => item);
    result.push(receivedItem);
  }
  return result;
}

const getAll = (req, res) => {
  Stages.find()
    .exec()
    .then(async (actions) => {
      const resultActions = actions.slice();
      const result = [];
      for (const item of resultActions) {
        const newItem = { ...item._doc };
        newItem.stages = await getStages(item.stages_id);
        delete newItem.stages_id;
        result.push(newItem);
      }
      return res.json(result);
    })
    .catch((err) => res.status(500).json(err));
};

const get = (req, res) => {
  Stages.findById(req.params.id)
    .exec()
    .then(async (action) => {
      // eslint-disable-next-line no-underscore-dangle
      const result = { ...action._doc };
      result.stages = await getStages(result.stages_id);
      delete result.stages_id;
      res.json(result);
    })
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
