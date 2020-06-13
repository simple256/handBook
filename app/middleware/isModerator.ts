/**
 * Проверяет является ли пользователем администратором
 * @param req
 * @param res
 * @param next
 */
export default async (req, res, next) => {
  const user = req.currentUser;
  const role = user.get('role');
  if (['admin', 'moderator'].includes(role.toLowerCase())) {
    res.status(403).send('User is not admin');
  } else {
    next();
  }
};
