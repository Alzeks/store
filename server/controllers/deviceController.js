const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo, Type, Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
  async create(req, res, next){
try{
    const {name, price, brandId, typeId, info} = req.body
    const {img} = req.files

if(!name || !price || !req.files || !typeId || !brandId
  ){return res.json('no main characteristic')
  }
  const candidat = await Device.findOne({where: {name}})
  if(candidat) return res.json('name exist')

   let fileName = uuid.v4() + '.PNG'
   img.mv(path.resolve(__dirname, '..', 'static', fileName) )

  const device = await Device.create(
   {name, price, brandId, typeId, img: fileName});

  if(info){
    const info1 = JSON.parse(info)
    info1.forEach(i =>  DeviceInfo.create({
    title: i.title,
     description: i.description,
     deviceId: device.id
    })
  )
    }
    return res.json(device)
  }catch (e){ next(ApiError.badRequest(e.message))}
  }

   async getALL(req, res, next){
       let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
       let devices;
        if(brandId && typeId){
  devices = await Device.findAll({where: {brandId, typeId}, limit, offset})
  //sdevices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
       }
       if(!brandId && !typeId){
      devices = await Device.findAll(//{limit, offset},
 {limit, offset, include: [{model: Type},{model: Brand}]})
        }
        if(brandId && !typeId){
      devices = await Device.findAll({where: {brandId}, limit, offset})
        }
        if(!brandId && typeId){
      devices = await Device.findAll({where: {typeId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res, next){
      const {id} = req.params
      const device = await Device.findOne(
    {where: {id},
    include: [{model: DeviceInfo,  as: 'info'},
         {model: Type}, {model: Brand}]
   },
    )
      return res.json(device)
    }

  async deleteOne(req, res){console.log('deleteOne');
      const {id, img} = req.params
      console.log(id, img)

  const device = await Device.destroy({where: {id}})
      const deviceId = id
  const info = await DeviceInfo.findOne({where: {deviceId}})
       if(info){DeviceInfo.destroy({where: {deviceId}})
       return res.json(info)
     }
     return res.json(device)
    }
}
module.exports = new DeviceController()
