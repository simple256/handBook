/**
 * @apiDefine Actions
 * @apiError ActionsNotFound The <code>id</code> of the Action was not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 *     {
 *       "err": "ActionNotFound"
 *     }
 */

/**
 * @api {get} /actions Получить список всех действий
 * @apiName GetActions
 * @apiGroup Actions
 *
 * @apiSuccess {Object[]} list Получить список всех действий
 * @apiSuccess {string} list._id <code>_id</code> действия
 * @apiSuccess {string} list.title Название действия
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *         {
 *             "_id": "5e308efacd39ce42b0cc2df0",
 *             "title": "Test Action name",
 *             "__v": 0
 *         },
 *         {
 *             "_id": "5ec374f4dc8d5319115f2f40",
 *             "title": "Test Action name",
 *             "__v": 0
 *         }
 *      ]
 *
 * @apiUse Actions
 */

/**
 * @api {put} /actions/:id Редактировать действие
 * @apiName PutAction
 * @apiGroup Actions
 *
 * @apiParam {string} id ID действия
 * @apiParam {string} [_id] ID действия
 * @apiParam {string} title Название действия
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse Actions
 */

/**
 * @api {delete} /actions/:id Удалить действие
 * @apiName DeleteAction
 * @apiGroup Actions
 *
 * @apiParam {string} id ID действия
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse Actions
 */

/**
 * @api {get} /action/:id Получить действие по ID
 * @apiName GetActionById
 * @apiGroup Actions
 *
 * @apiParam {string} id ID действия
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "5e308efacd39ce42b0cc2df0",
 *         "title": "new action name2"
 *     }
 */

/**
 * @api {post} /actions Создать действие
 * @apiName PostAction
 * @apiGroup Actions
 *
 * @apiParam {string} title Название действие
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "5e308efacd39ce42b0cc2df0",
 *         "title": "new action name2"
 *     }
 */
