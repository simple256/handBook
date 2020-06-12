import { model, Types as MongooseTypes } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Projects = model('Projects');
const User = model('User');

const getAllUsersProject = (req: Request, res: Response) => {
  const userProjects = req.currentUser.get('projects_id');
  Projects.find({ _id: { $in: userProjects } })
    .exec()
    .then((actions: any) => res.json(actions))
    .catch((err: Error) => res.status(500).json(err));
};

const saveProjectToUser = async (req: Request, res: Response) => {
  const project = await Projects.findById(req.body.id).exec();
};

const get = (req: Request, res: Response) => {
  Projects.findById(req.params.id)
    .exec()
    .then((action: any) => res.json(action))
    .catch((err: Error) => res.status(500).json(err));
};

const create = async (req: Request, res: Response) => {
  Projects.create(req.body)
    .then((action: any) => {
      User.findByIdAndUpdate(req.currentUser.get('_id'), { $push: { projects_id: action.get('_id') } }, (res) =>
        console.log(`Result of update user: ${res}`),
      );
      res.json(action);
    })
    .catch((err: Error) => res.status(500).json(err));
};

const update = (req: Request, res: Response) => {
  Projects.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then((action: any) => {
      action.__history = {
        event: 'updated',
        user: req.currentUser._id,
        reason: undefined,
        data: undefined,
        type: undefined,
        method: 'update',
      };
      action.save();
      res.json(action);
    })
    .catch((err: Error) => res.status(500).json(err));
};

const remove = (req: Request, res: Response) => {
  Projects.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err: Error) => res.status(500).json(err));
};

const createCopyOfProject = (req: Request, res: Response) => {
  Projects.findById(req.body.id)
    .exec()
    .then((doc) => {
      doc._id = MongooseTypes.ObjectId();
      doc.isNew = true;
      doc.save();
    });
};

const getProjectHistory = (req: Request, response: Response) => {
  Projects.findById(req.params.id, (error, project) => {
    const query = {
      find: {},
      select: {},
      sort: '',
      populate: '',
      limit: 50
    };
    project
      // @ts-ignore
      .getVersions(query)
      .then((res) => {
        response.json(res);
      });
  });
};

export default {
  getAllUsersProject,
  get,
  create,
  update,
  remove,
  saveProjectToUser,
  getProjectHistory,
};
