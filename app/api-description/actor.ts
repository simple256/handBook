/**
 * @apiDefine Actors
 * @apiError ActorNotFound The <code>id</code> of the Action was not found.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ActorNotFound"
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
 * @apiUse Actors
 */

