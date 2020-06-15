import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const ProjectCategory = model('ProjectCategory');

async function getFirstLevel(request: Request, response: Response) {
  const rootCategories = await ProjectCategory.find({ parent_id: undefined }).sort({ title: 1 });
  const children: boolean[] = new Array(rootCategories.length || 0);
  await Promise.all(
    rootCategories.map(async (item, i) => {
      await ProjectCategory.findOne({ parent_id: item.get('_id') }, (err, _child) => {
        children[i] = Boolean(_child);
      });
    }),
  );
  const modItems = rootCategories.map((elem, i) => {
    return new ProjectCategory({
      _id: elem.get('_id'),
      title: elem.get('title'),
      hasChildren: children[i],
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

async function getChildrenCategories(request: Request, response: Response) {
  const rootCategories = await ProjectCategory.find({ parent_id: request.params.id });
  const children: boolean[] = new Array(rootCategories.length || 0);
  await Promise.all(
    rootCategories.map(async (item, i) => {
      await ProjectCategory.findOne({ parent_id: item.get('_id') }, (err, _child) => {
        children[i] = Boolean(_child);
      });
    }),
  );
  const modItems = rootCategories.map((elem, i) => {
    return new ProjectCategory({
      _id: elem.get('_id'),
      title: elem.get('title'),
      hasChildren: children[i],
    });
  });
  response.json(modItems);
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

function update(request: Request, response: Response) {
  ProjectCategory.findByIdAndUpdate(request.params.id, request.body)
    .exec()
    .then(
      (result) => response.json(result),
      (err) => response.status(500).json(err),
    );
}

export default {
  getFirstLevel,
  getChildrenCategories,
  create,
  update,
};
