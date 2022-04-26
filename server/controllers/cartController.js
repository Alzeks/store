const {Basket, BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Device} = require('../models/models')

class CartController {
  async create(req, res, next){
  const {name, price, count, deviceId, img} = req.body
  console.log(req.body);
try{
   const isDevice = await BasketDevice.findOne(
    {where: {deviceId}},)
   if(isDevice){return res.json('exist')}
   //{return next(ApiError.badRequest('device exist'))}
   const device = await BasketDevice.create(
   { name, price, count, deviceId, img},)
   return res.json(device)
}catch (e){ next(ApiError.internal(e.message))}
  }

  async getALL(req, res, next){
  try{ const devices = await BasketDevice.findAll()
       return res.json(devices);
  }catch (e){ next(ApiError.internal(e.message))}
  }

  async deleteOne(req, res){
const {id} = req.params
if(!id){return next(ApiError.badRequest('no id'))}
try{
  const device = await BasketDevice.destroy({where: {id}})
  const devices = await BasketDevice.findAll()
  return res.json(device)
}catch (e){ next(ApiError.internal(e.message))}
  }

  async countDevice(req, res, next){
const {count, id} = req.body
if(!count || !id){return next(ApiError.badRequest('no params'))}
try{const device = await BasketDevice.update(
    {count: count},{where: {id}},)
    return res.json(count)
 }catch (e){ next(ApiError.internal(e.message))}
  }

}
  module.exports = new CartController()
