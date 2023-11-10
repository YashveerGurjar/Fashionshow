const express=require('express');
const route=express.Router();
const {verifyToken,verifyTokenUser,verifyTokenAdmin}=require('./VerifyToken')
const User=require('../Models/User');
const CryptoJS= require('crypto-js');

route.put("/:id",verifyTokenUser,async (req,resp)=>{
    if(req.body.password){
        req.body.password= CryptoJS.AES.encrypt(req.body.password,process.env.pass).toString();
    }
    try{
        const updateUser= await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {
            new:true
        }
        );
        resp.status(200).json(updateUser);
    }
    catch(err){
        resp.status(500).json(err);
    }
})
route.get('/Find',verifyTokenAdmin,async(req,res)=>{
    
    try{
        const data= await User.find();
        res.status(200).json(data);    
    }
    catch(err){
        res.status(500).json(err);
    }
})
route.delete('/:id',verifyTokenAdmin,async(req,res)=>{
    
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");    
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports=route;