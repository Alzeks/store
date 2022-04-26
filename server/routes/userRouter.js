const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware,
UserController.check)
// (req, res)=>{
//   res.json('user/auth work')
// }
router.get('/registration', UserController.getAll)


module.exports = router
