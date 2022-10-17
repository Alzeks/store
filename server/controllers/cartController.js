const {Basket, BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Device} = require('../models/models')

class CartController {
  async create(req, res, next){
  let {name, price, count, deviceId, img} = req.body
try{console.log('count',count);
   const isDevice = await BasketDevice.findOne(
    {where: {deviceId}},)
   if(isDevice){count ++
     console.log('count2',count);
      const device = await BasketDevice.update(
         {count: count},{where: {deviceId}},)
         return res.json(device)
     //res.json('exist')
   }
   const device = await BasketDevice.create(
   { name, price, count, deviceId, img},)
   return res.json(device)
}catch (e){ next(ApiError.internal(e.message))}
  }

  async getALL(req, res, next){
    const {id} = req.body; console.log(id);
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
