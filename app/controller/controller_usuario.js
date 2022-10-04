const jwt=require('jsonwebtoken');
const Usuario=require('../model/model_usuario');

exports.create=(req,res)=>{
 Usuario.create(new Usuario(req.body),(error,data)=>{
    if(error){
        res.status(500).send({message:"Failed",res:error});
        return
    }
    res.send(data);
 })
}
exports.update=(req,res)=>{
    Usuario.update(new Usuario(req.body),(error,data)=>{
       if(error){
        if(error.kind==="not_found"){
           res.status(404).send({message:"Failed",res:error});
           return
        }
        res.status(500).send({message:"Failed",res:error});
        return
       }
       res.send(data);
    })
   }
  
exports.viewone=(req,res)=>{
    Usuario.viewone(req.params.id,(error,data)=>{
       if(error){
        if(error.kind==="not_found"){
           res.status(404).send({message:"Failed",res:error});
           return
        }
        res.status(500).send({message:"Failed",res:error});
        return
       }
       res.send(data);
    })
   }
   exports.findUser=(req,res)=>{
    Usuario.findUser(new Usuario(req.body),(error,data)=>{
       if(error){
        console.log(error)
        if(error.kind==="not_found"){
           res.status(404).send({message:"Failed",res:error});
           return
        }
        res.status(500).send({message:"Failed",res:error});
        return
       }
       const user={
        id:0,
        nombre:"bssventas",
        cdd:5689
       }
       jwt.sign({user},'secretKey',(error,token)=>{
        data.res[0].token=token;
          res.send(data);
       })
     
    })
   }
   exports.delete=(req,res)=>{
    Usuario.delete(req.params.id,(error,data)=>{
        if(error){
            if(error.kind==="not_found"){
               res.status(404).send({message:"Failed",res:error});
               return
            }
            res.status(500).send({message:"Failed",res:error});
            return
           }
           res.send(data);
    })
   }