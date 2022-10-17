//const bcrypt = require('bcrypt')
const bcrypt = require('bcryptjs')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

// const generateJwt = (id, email, role)=>{
//   return jwt.sign(
//      {id, email, role},process.env.SECRET_KEY,{expiresIn: '24'}
//    )
// }
class UserController {
async registration(req, res, next){
  const {email, password, role} = req.body
 try{
   if(!email || !password)return res.json({message: 'No params'})
  const  candidat = await User.findOne({where: {email}})
  if(candidat) return res.json({message: 'user exist'})

  const hashPassword = await bcrypt.hash(password, 3)
  const user = await User.create({email, role, password: hashPassword})
  const basket = await Basket.create({userId: user.id})
  //const token = generateJwt(user.id,user.email, user.role)
   const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: "1"})
   return res.json({token})
}catch (e){ next(ApiError.badRequest(e.message))}
}

 async login(req, res, next){
   const {email, password, role} = req.body
 try{ 
   const user = await User.findOne({where: {email}})
   if(!user) return res.json({message: 'no such user'})//??return res.write()

   const comparePass = bcrypt.compareSync(password, user.password)
   if(!comparePass) return res.json({message: 'no such password'})
   const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '1h'})

   return res.json({token, user})
 }catch (e){ next(ApiError.badRequest(e.message))}
 }

  async checkAuth(req, res, next){
     const user = await User.findOne({id: req.user.id})
     const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: "1h"})
     return res.json({token, user})
   }
 async getAll(req, res){
      const users = await User.findAll()
      return res.json(users)
        }

  async getOne(req, res){
             const {id} = req.params
             const user = await User.findOne({where: {id}})
             return res.json(user)
               }

 async deleteUser(req, res){
            const {id} = req.params
            const user = await User.destroy({where: {id}})
             return res.json({message: '1'})
               }
}
module.exports = new UserController()
