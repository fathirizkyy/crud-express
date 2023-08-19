const route=require('express').Router()
const { addData, getData, updateData, deleteData } = require('../controllers/crudcontroller')
route.post('/',addData)
route.get('/',getData)
route.patch('/:id',updateData)
route.delete('/:id',deleteData)
module.exports=route