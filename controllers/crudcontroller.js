//const {Crud} itu mengambil dari nama class di crud.js
const {Crud}=require('../models')
class CrudController{
    static addData(req,res){
        const {name,address,email}=req.body
        Crud.create({
            name,address,email
        }).then(result=>{
            res.status(200).json({
                "status":"ok",
                "data":result
            })
        })
        .catch(err=>{
            res.status(500).json({
                "status":"error",
                "error":err
            })
        })
    }
    static getData(req,res){
        Crud.findAll()
        .then(result=>{
            res.status(200).json({
                "status":"ok",
                "data":result
            })
        })
        .catch(err=>{
            res.status(500).json({
                "status":"error",
                "error":err
            })
        })
    }
    static updateData(req,res){
        const {name,address,email}=req.body
        Crud.update({
            name:name,
            address:address,
            email:email
        },{
            where:{
                id:req.params.id
            }
        })
        .then(result=>{
            res.status(200).json({
                "status":"ok",
                "message":"berhasil di update",
                "name":name,
                "address":address,
                "email":email
            })
        })
        .catch(err=>{
            res.status(500).json({
                "status":"error",
                "error":err
            })
        })
    }
    static deleteData(req,res){
        Crud.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(result=>{
            res.status(200).json({
                "status":"ok",
                "message":"data berhasil di hapus"
            })
        })
        .catch(err=>{
            res.status(500).json({
                "status":"error",
                "error":err
            })
        })
    }
}
module.exports=CrudController