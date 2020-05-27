import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Actors = model('Actors');

const getAll = (req: Request, res: Response) => {
    Actors.find()
        .exec()
        .then((actions: any) => res.json(actions))
        .catch((err: Error) => res.status(500).json(err));
};

const get = (req: Request, res: Response) => {
    Actors.findById(req.params.id)
        .exec()
        .then((action: any) => res.json(action))
        .catch((err: Error) => res.status(500).json(err));
};

const create = (req: Request, res: Response) => {
    Actors.create(req.body)
        .then((action: any) => res.json(action))
        .catch((err: Error) => res.status(500).json(err));
};

const update = (req: Request, res: Response) => {
    Actors.updateOne({ _id: req.params.id }, req.body)
        .exec()
        .then((action: any) => res.json(action))
        .catch((err: Error) => res.status(500).json(err));
};

const remove = (req: Request, res: Response) => {
    Actors.deleteOne({ id: req.params.id })
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
