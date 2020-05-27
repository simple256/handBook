import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Stages = model('Stages');

const get = (req: Request, res: Response) => {
    Stages.findById(req.params.id)
        .exec()
        .then((stage: any) => res.json(stage))
        .catch((err: Error) => res.status(500).json(err));
};

const create = async (req: Request, res: Response) => {
    const newStage = req.body;
    Stages.create(newStage)
        .then((action: any) => res.json(action))
        .catch((err: Error) => res.status(500).json(err));
};

const update = (req: Request, res: Response) => {
    Stages.updateOne({ _id: req.params.id }, req.body)
        .exec()
        .then((action: any) => res.status(200).send('OK'))
        .catch((err: Error) => res.status(500).json(err));
};

const remove = (req: Request, res: Response) => {
    Stages.deleteOne({ _id: req.params.id })
        .exec()
        .then(() => res.json({ success: true }))
        .catch((err: Error) => res.status(500).json(err));
};

export default {
    get,
    create,
    update,
    remove,
};
