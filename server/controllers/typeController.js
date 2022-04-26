const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
async create(req, res, next){
  const {name} = req.body
  if(name === '') return res.json('no params')
  const type = await Type.create({name})
  return res.json(type)
 }

async getAll(req, res){
  const types = await Type.findAll()
    return res.json(types)
      }

      async deleteOne(req, res, next){
        const {id} = req.params
        if(id == 0) return res.json('no id')
//if(id == 0){return res.jsone('no id')//id - must ціле число
        const type = await Type.destroy({where: {id}})
        return res.json(type)
            }

}
module.exports = new TypeController()
