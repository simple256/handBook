import { model } from 'mongoose';
import { Request, Response } from '../interfaces/express';

const UserModel = model('User');

function update(request: Request, response: Response) {
    const { currentUser } = request;
    if (currentUser) {
        UserModel.updateOne({ _id: currentUser.get('id') }, request.body)
            .exec()
            .then(
                () => response.status(200).send('OK'),
                (err) =>
                    response.status(500).json({
                        Error: err,
                    }),
            );
    } else {
        response.status(422).json({
            message: 'Пользователь не найден.',
        });
    }
}

export default {
    update,
};
