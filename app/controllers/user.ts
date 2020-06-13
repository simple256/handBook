import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const UserModel = model('User');

function update(request: Request, response: Response) {
  const { currentUser } = request;
  if (currentUser) {
    UserModel.updateOne({ _id: currentUser.get('id') }, request.body)
      .exec()
      .then(
        () => response.status(202).send('Accepted'),
        (err) =>
          response.status(500).json({
            Error: err,
          }),
      );
  } else {
    response.status(417).json({
      message: 'User not found',
    });
  }
}

export default {
  update,
};
