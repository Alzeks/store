const Router = require('express')
const router = new Router()
const CartController = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

 router.post('/', authMiddleware, CartController.create)
 router.get('/', authMiddleware, CartController.getALL)
 router.put('/', CartController.countDevice)
 router.delete('/:id', authMiddleware, CartController.deleteOne)

module.exports = router
