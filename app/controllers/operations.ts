import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Operations = model('Operations');

const getAll = (req: Request, res: Response) => {
  Operations.find()
    .exec()
    .then((actions: any) => res.json(actions))
    .catch((err: Error) => res.status(500).json(err));
};

const get = (req: Request, res: Response) => {
  Operations.findById(req.params.id)
    .exec()
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const create = (req: Request, res: Response) => {
  Operations.create(req.body)
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const update = (req: Request, res: Response) => {
  Operations.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const remove = (req: Request, res: Response) => {
  Operations.deleteOne({ id: req.params.id })
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
