//const bcrypt = require('bcrypt')
const bcrypt = require('bcryptjs')
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
  //const token = generateJwt(user.id,user.email, user.role)
   const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: "1h"})
   return res.json({token})
}catch (e){ next(ApiError.badRequest(e.message))}
}

 async login(req, res, next){
   const {email, password, role} = req.body
try{console.log('body',req.body);
   const user = await User.findOne({where: {email}})
   if(!user) return res.json('no such user')//??return res.write()

   let comparePass = bcrypt.compareSync(password, user.password)
   if(!comparePass){return res.json('no such password')}
   const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '1h'})

   return res.json({token, user})
 }catch (e){ next(ApiError.badRequest(e.message))}
 }

  async checkAuth(req, res, next){
     const user = await User.findOne({id: req.user.id})
     const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: "1h"})
     return res.json({token})
   }
       async getAll(req, res){
      const regAll = await User.findAll()
      return res.json(regAll)
        }
}
module.exports = new UserController()
