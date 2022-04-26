const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
  async create(req, res, next){
    const {name} = req.body
    if(name === '') return res.json('no params')
const brand = await Brand.create({name})
    return res.json(brand)
  }

   async getAll(req, res){
    const brands = await Brand.findAll()
      return res.json(brands)
        }

         async deleteOne(req, res, next){
        const {id} = req.params
        console.log(id);
        if(id == 0) return res.json('no id')
        const brand = await Brand.destroy({where: {id}});
        return res.json(brand)
              }
}
module.exports = new BrandController()
