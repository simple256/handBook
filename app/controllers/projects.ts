import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Projects = model('Projects');
const User = model('User');
const Stages = model('Stages');

const getAllUsersProject = (req: Request, res: Response) => {
  const userProjects = req.currentUser.get('projects_id');
  Projects.find({ _id: { $in: userProjects } })
    .sort({ title: 1 })
    .exec()
    .then((actions: any) => res.json(actions))
    .catch((err: Error) => res.status(500).json(err));
};

const getPublicProjectsByCategory = (req: Request, res: Response) => {
  Projects.find({
    category_id: req.params.id,
    is_public: true,
  })
    .sort({ title: 1 })
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
  const data = { ...req.body };
  const userId = req.currentUser.get('_id');
  data.author_id = userId;
  data.editor_id = userId;
  data.creator_id = userId;
  data.created_date = Date.now();
  Projects.create(data)
    .then(async (action: any) => {
      await User.findByIdAndUpdate(req.currentUser.get('_id'), { $push: { projects_id: action.get('_id') } });
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

const addComment = async (req: Request, res: Response) => {
  Projects.findById(req.params.id)
    .exec()
    .then(
      async (project) => {
        const comments = project.get('comments') || [];
        comments.push({
          author_id: req.currentUser.get('_id'),
          date: Date.now(),
          text: req.body.text,
        });
        project.set('comments', comments);
        project.save((err, item) => {
          if (err) {
            res.status(404).json(err);
          } else {
            res.json(item);
          }
        });
      },
      (err: Error) => res.status(404).json(err),
    );
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
    .then(async (doc) => {
      const stages = await Stages.findById(doc.get('_id'));
      const stageCopy = new Stages({
        stages: stages.get('stages'),
      });
      let stagesId = '';
      await stageCopy.save((err, item) => {
        if (err) {
          res.status(500).json(err);
        } else {
          stagesId = item.get('_id');
        }
      });
      const projectCopy = new Projects({
        is_public: doc.get('is_public'),
        title: doc.get('title'),
        editor_id: req.currentUser.get('_id'),
        creator_id: doc.get('creator_id'),
        created_date: Date.now(),
        description: doc.get('description'),
        category_id: doc.get('category_id'),
        stages_id: stagesId,
        source_project_id: doc.get('_id'),
      });
      projectCopy.save((err, item) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.json(item);
        }
      });
    });
};

const getProjectHistory = (req: Request, response: Response) => {
  Projects.findById(req.params.id, (error, project) => {
    const query = {
      find: {},
      select: {},
      sort: '',
      populate: '',
      limit: 50,
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
  createCopyOfProject,
  addComment,
  getPublicProjectsByCategory,
};
