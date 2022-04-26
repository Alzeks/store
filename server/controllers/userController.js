const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')


const generateJwt = (id, email, role)=>{
  return jwt.sign(
     {id, email, role},
     process.env.SECRET_KEY,
     {expiresIn: '24'}
   )
}
class UserController {
async registration(req, res, next){
  const {email, password, role} = req.body
try{
  const  candidat = await User.findOne({where: {email}})
  if(candidat) return res.json('exist')

  const hashPassword = await bcrypt.hash(password, 3)
  const user = await User.create({email, role, password: hashPassword})
  const basket = await Basket.create({userId: user.id})
  const token = generateJwt(user.id, user.email, user.role)
   return res.json({token})
}catch (e){ next(ApiError.badRequest(e.message))}
}
 async login(req, res, next){
   const {email, password, role} = req.body
try{
   const user = await User.findOne({where: {email}})
   if(!user){return res.json('no sach user')}
   let comparePass = bcrypt.compareSync(password, user.password)
   if(!comparePass){return res.json('no sach password')}
   const token = generateJwt(user.id, user.email, user.role)
   return res.json({token})
 }catch (e){ next(ApiError.badRequest(e.message))}
 }
  async check(req, res, next){
    // const token = generateJwt(
    //   req.user.id, req.user.email, req.user.role)
    // return res.json({token})
   res.json('user/auth works')
   }
    async getAll(req, res){
      const regAll = await User.findAll()
      return res.json(regAll)
        }
}
module.exports = new UserController()
