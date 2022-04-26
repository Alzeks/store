const Router = require('express')
const router = new Router()
const DeviceController = require('../controllers/devicecontroller')

router.post('/', DeviceController.create)
router.get('/', DeviceController.getALL)
router.get('/:id', DeviceController.getOne)
router.delete('/:id', DeviceController.deleteOne)

module.exports = router
