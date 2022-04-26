const Router = require('express')
const router = new Router()
const CartController = require('../controllers/cartController')

 router.post('/', CartController.create)
 router.get('/', CartController.getALL)
 router.put('/', CartController.countDevice)
 router.delete('/:id', CartController.deleteOne)

module.exports = router
