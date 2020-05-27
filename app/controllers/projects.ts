import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Projects = model('Projects');

const getAll = (req: Request, res: Response) => {
    const userProjects = req.currentUser.get('projects_id');
    Projects.find({ _id: { $in: userProjects } })
        .exec()
        .then((actions: any) => res.json(actions))
        .catch((err: Error) => res.status(500).json(err));
};

const get = (req: Request, res: Response) => {
    Projects.findById(req.params.id)
        .exec()
        .then((action: any) => res.json(action))
        .catch((err: Error) => res.status(500).json(err));
};

const create = (req: Request, res: Response) => {
    Projects.create(req.body)
        .then((action: any) => res.json(action))
        .catch((err: Error) => res.status(500).json(err));
};

const update = (req: Request, res: Response) => {
    Projects.updateOne({ _id: req.params.id }, req.body)
        .exec()
        .then((action: any) => res.json(action))
        .catch((err: Error) => res.status(500).json(err));
};

const remove = (req: Request, res: Response) => {
    Projects.deleteOne({ id: req.params.id })
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
