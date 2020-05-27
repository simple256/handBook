import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Actions = model('Actions');

function getAll(request: Request, response: Response): void {
    Actions.find()
        .exec()
        .then((actions: any) => response.json(actions))
        .catch((err: any) => response.status(500).json(err));
}

function get(request: Request, response: Response): void {
    Actions.findById(request.params.id)
        .exec()
        .then((action: any) => response.json(action))
        .catch((err: any) => response.status(500).json(err));
}

function create(request: Request, res: Response): void {
    Actions.create(request.body)
        .then((action: any) => res.json(action))
        .catch((err: any) => res.status(500).json(err));
}

function update(request: Request, response: Response): void {
    Actions.updateOne(
        {
            _id: request.params.id,
        },
        request.body,
    )
        .exec()
        .then((action: any) => response.json(action))
        .catch((err: any) => response.status(500).json(err));
}

function remove(request: Request, response: Response): void {
    Actions.deleteOne({ id: request.params.id })
        .exec()
        .then(() => response.json({ success: true }))
        .catch((err: any) => response.status(500).json(err));
}

export default {
    getAll,
    get,
    create,
    update,
    remove,
};
