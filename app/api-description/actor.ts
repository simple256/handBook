/**
 * @apiDefine ActorsNotFound
 * @apiError InternalServerError внутренняя ошибка сервера
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "error": "InternalServerError"
 *     }
 */

/**
 * @api {get} /actors Получить список всех исполнителей
 * @apiName GetActors
 * @apiGroup Actors
 *
 * @apiSuccess {Object[]} actors Получить список исполнителей
 * @apiSuccess {string} actors._id <code>_id</code> исполнителя
 * @apiSuccess {string} actors.title Название исполнителя
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "_id": "5e308fb5cd39ce42b0cc2df2",
 *            "title": "Test Actor"
 *        }
 *     ]
 *
 * @apiUse ActorsNotFound
 */

/**
 * @api {get} /actor/:id Получить исполнителя по ID
 * @apiName GetActor
 * @apiGroup Actors
 *
 * @apiParam {string} id ID действия
 *
 * @apiSuccess {string} title Название исполнителя
 * @apiSuccess {string} _id ID исполнителя
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "_id": "5e308fb5cd39ce42b0cc2df2",
 *            "title": "Test Actor"
 *        }
 *     ]
 *
 * @apiUse ActorsNotFound
 */

/**
 * @api {post} /actors Создать исполнителя
 * @apiName CreateActor
 * @apiGroup Actors
 *
 * @apiParam {string} title Название исполнителя
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "_id": "5e308fb5cd39ce42b0cc2df2",
 *            "title": "Test Actor"
 *        }
 *     ]
 *
 * @apiUse ActorsNotFound
 */

/**
 * @api {delete} /actions/:id Удалить исполнителя
 * @apiName DeleteActor
 * @apiGroup Actors
 *
 * @apiParam {string} id ID действия
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse ActorsNotFound
 */

