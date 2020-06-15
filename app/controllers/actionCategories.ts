import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const ActionCategory = model('ActionCategory');

async function getFirstLevel(request: Request, response: Response) {
  const rootCategories = await ActionCategory.find({ parent_id: undefined }).sort({ title: 1 });
  const children: boolean[] = new Array(rootCategories.length || 0);
  await Promise.all(
    rootCategories.map(async (item, i) => {
      await ActionCategory.findOne({ parent_id: item.get('_id') }, (err, _child) => {
        children[i] = Boolean(_child);
      });
    }),
  );
  const modItems = rootCategories.map((elem, i) => {
    return new ActionCategory({
      _id: elem.get('_id'),
      title: elem.get('title'),
      hasChildren: children[i],
    });
  });
  response.json(modItems);
}

function getById(request: Request, response: Response) {
  ActionCategory.findById(request.body.id)
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
  const rootCategories = await ActionCategory.find({ parent_id: request.params.id });
  const children: boolean[] = new Array(rootCategories.length || 0);
  await Promise.all(
    rootCategories.map(async (item, i) => {
      await ActionCategory.findOne({ parent_id: item.get('_id') }, (err, _child) => {
        children[i] = Boolean(_child);
      });
    }),
  );
  const modItems = rootCategories.map((elem, i) => {
    return new ActionCategory({
      _id: elem.get('_id'),
      title: elem.get('title'),
      hasChildren: children[i],
    });
  });
  response.json(modItems);
}

function create(request: Request, response: Response) {
  ActionCategory.create(request.body).then(
    (rez) => {
      response.json(rez);
    },
    (err) => {
      response.status(500).send(err);
    },
  );
}

function update(request: Request, response: Response) {
  ActionCategory.findByIdAndUpdate(request.params.id, request.body)
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
