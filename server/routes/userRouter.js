const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UserController.registration)
router.post('/login',  UserController.login)
router.get('/auth', authMiddleware, UserController.checkAuth)
router.get('/registration/:id', UserController.getOne)
router.get('/registration', UserController.getAll)//for admin
router.delete('/registration/:id', UserController.deleteUser)

module.exports = router
