import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const ProjectCategory = model('ProjectCategory');

function getFirstLevel(request: Request, response: Response) {
  ProjectCategory.find({ parent_id: { $in: [undefined, null, []] } })
    .exec()
    .then(
      (rez) => {
        response.json(rez);
      },
      (err) => {
        response.status(500).send(err);
      },
    );
}

function getById(request: Request, response: Response) {
  ProjectCategory.findById(request.body.id)
    .exec()
    .then(
      (rez) => {
        response.json(rez);
      },
      (err) => {
        response.status(500).send(err);
      },
    );
}

function getChildrenCategories(request: Request, response: Response) {
  ProjectCategory.find({ parent_id: request.body.parent_id })
    .exec()
    .then(
      (rez) => {
        response.json(rez);
      },
      (err) => {
        response.status(500).send(err);
      },
    );
}

function create(request: Request, response: Response) {
  ProjectCategory.create(request.body).then(
    (rez) => {
      response.json(rez);
    },
    (err) => {
      response.status(500).send(err);
    },
  );
}

export default {
  getFirstLevel,
  getChildrenCategories,
  getById,
  create,
};
