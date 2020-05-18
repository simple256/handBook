import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Stages = model('Stages');
const Operations = model('Operations');

async function getStages(stagesIdArray: string[]) {
  const result = [];
  for (const stage of stagesIdArray) {
    const receivedItem = await Operations.findById(stage)
      .exec()
      .then((item: any) => item);
    result.push(receivedItem);
  }
  return result;
}

const getAll = (req: Request, res: Response) => {
  Stages.find()
    .exec()
    .then(async (actions: any) => {
      const resultActions = actions.slice();
      const result = [];
      for (const item of resultActions) {
        // @ts-ignore
        const newItem = { ...item._doc };
        // @ts-ignore
        newItem.stages = await getStages(item.stages_id);
        delete newItem.stages_id;
        result.push(newItem);
      }
      return res.json(result);
    })
    .catch((err: Error) => res.status(500).json(err));
};

const get = (req: Request, res: Response) => {
  Stages.findById(req.params.id)
    .exec()
    .then(async (action: any) => {
      // @ts-ignore
      const result = { ...action._doc };
      result.stages = await getStages(result.stages_id);
      delete result.stages_id;
      res.json(result);
    })
    .catch((err: Error) => res.status(500).json(err));
};

const create = async (req: Request, res: Response) => {
  if (req.body.operations && req.body.operations.length) {
    const operations: string[] = [];
    const allOperations = req.body.operations.slice();
    console.log('\n\n' + allOperations + '\n\n');
    // for (const operation of allOperations) {
    Operations.create({
      title: allOperations[0].title,
      description: allOperations[0].description,
      actor_id: allOperations[0].actor,
      object_id: allOperations[0].object,
      action_id: allOperations[0].action,
    })
      .then(async (result: any) => {
        // @ts-ignore
        operations.push(result._doc._id);
      })
      .catch((err: Error) => res.status(500).json(err));
    // }
    console.log('\n\n' + operations + '\n\n');
    Stages.create({
      stages_id: operations,
    })
      .then((action: any) => res.json(action))
      .catch((err: Error) => res.status(500).json(err));
  }
};

const update = (req: Request, res: Response) => {
  Stages.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const remove = (req: Request, res: Response) => {
  Stages.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err: Error) => res.status(500).json(err));
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
