const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/typecontroller')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', TypeController.create)
//router.post('/', checkRoleMiddleware( 'ADMIN'),TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/:id', TypeController.deleteOne)

module.exports = router
