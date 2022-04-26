require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
//const {Sequelize} = require('sequelize')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const fileupload = require('express-fileupload')
const path = require('path')
const errorHandler = require('./middleware/ErrorMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(function(req, res, next) {next();});

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload( {}))
app.use('/api', router)
app.use(errorHandler)//end point!

//app.get('/', (req, res)=>{res.status(200).json({message: 'work'})})

const start = async () => {
  try {
   await sequelize.authenticate()
   await sequelize.sync()
//sequelize.Device.sync({alter: true})
.then(() => console.log('db Connected.'))

// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('postgres', 'postgres', 'gotsatsuk1',
//   {dialect: 'postgres', port: 5432   })
// await sequelize.authenticate()
//   .then(() => console.log('Connected.'))
//   .catch((err) => console.error('Connection error: ', err))

  app.listen(PORT, () => console.log(`server work port:${PORT}`))
 } catch (e) {console.log(e)}
}
start()
//app.listen(PORT, () => console.log(`server work port:${PORT}`))
