import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const ProjectCategory = model('ProjectCategory');

async function getFirstLevel(request: Request, response: Response) {
  const rootCategories = await ProjectCategory.find({ parent_id: undefined });
  const childrens: boolean[] = new Array(rootCategories.length || 0);
  await Promise.all(
    rootCategories.map(async (item, i) => {
      await ProjectCategory.findOne({ parent_id: item.get('_id') }, (err, _child) => {
        childrens[i] = Boolean(_child);
      });
    }),
  );
  const modItems = rootCategories.map((elem, i) => {
    return new ProjectCategory({
      _id: elem.get('_id'),
      title: elem.get('title'),
      hasChildren: childrens[i],
    });
  });
  response.json(modItems);
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
  ProjectCategory.find({ parent_id: request.params.id })
    .sort({ title: 1 })
    .exec()
    .then(
      (rez) => {
        const result = response.json(rez);
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
  create,
  // update,
};
