import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const ObjectsModel = model('ObjectsModel');

const getAll = (req: Request, res: Response) => {
  ObjectsModel.find()
    .exec()
    .then((actions: any) => res.json(actions))
    .catch((err: Error) => res.status(500).json(err));
};

const get = (req: Request, res: Response) => {
  ObjectsModel.findById(req.params.id)
    .exec()
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const create = (req: Request, res: Response) => {
  ObjectsModel.create(req.body)
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const update = (req: Request, res: Response) => {
  ObjectsModel.updateOne({ _id: req.params.id }, req.body)
    .exec()
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const remove = (req: Request, res: Response) => {
  ObjectsModel.deleteOne({ id: req.params.id })
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
