import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const Categories = model('ProjectCategory');

function getFirstLevel(request: Request, response: Response) {
  Categories.find({ parent_id: { $in: [undefined, null, []] } })
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
  Categories.create(request.body).then(
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
  create,
};
