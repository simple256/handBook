import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const ObjectCategory = model('ObjectCategory');

async function getFirstLevel(request: Request, response: Response) {
  const rootCategories = await ObjectCategory.find({ parent_id: undefined }).sort({ title: 1 });
  const childrens: boolean[] = new Array(rootCategories.length || 0);
  await Promise.all(
    rootCategories.map(async (item, i) => {
      await ObjectCategory.findOne({ parent_id: item.get('_id') }, (err, _child) => {
        childrens[i] = Boolean(_child);
      });
    }),
  );
  const modItems = rootCategories.map((elem, i) => {
    return new ObjectCategory({
      _id: elem.get('_id'),
      title: elem.get('title'),
      hasChildren: childrens[i],
    });
  });
  response.json(modItems);
}

function getById(request: Request, response: Response) {
  ObjectCategory.findById(request.body.id)
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
  const rootCategories = await ObjectCategory.find({ parent_id: request.params.id });
  const childrens: boolean[] = new Array(rootCategories.length || 0);
  await Promise.all(
    rootCategories.map(async (item, i) => {
      await ObjectCategory.findOne({ parent_id: item.get('_id') }, (err, _child) => {
        childrens[i] = Boolean(_child);
      });
    }),
  );
  const modItems = rootCategories.map((elem, i) => {
    return new ObjectCategory({
      _id: elem.get('_id'),
      title: elem.get('title'),
      hasChildren: childrens[i],
    });
  });
  response.json(modItems);
}

function create(request: Request, response: Response) {
  ObjectCategory.create(request.body).then(
    (rez) => {
      response.json(rez);
    },
    (err) => {
      response.status(500).send(err);
    },
  );
}

function update(request: Request, response: Response) {
  ObjectCategory.findByIdAndUpdate(request.params.id, request.body)
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
