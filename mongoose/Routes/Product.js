const express = require('express');
const route = express.Router();
const { verifyToken, verifyTokenUser, verifyTokenAdmin } = require('./VerifyToken')
const User = require('../Models/User');
const ProductModel = require('../Models/product');

route.post("/New", async (req, resp) => {
    try {
        const Product = await new ProductModel(req.body);
        const data = await Product.save();
        resp.status(200).json(data);
    }
    catch (err) {
        resp.status(500).json(err);
    }
})

route.get('/Find', async(req, res) => {
    const catQuery=req.query.category;
    console.log(catQuery);
    try {
        let data
        if(catQuery){
             data = await ProductModel.find(
                {categories:{
                    $in:  [catQuery] 
                }}
                
            );
           
        }else{
            data=await ProductModel.find()
        }
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err);
    }
})
route.put("/:id",verifyTokenAdmin,async (req,resp)=>{
    try{
        const updateUser= await ProductModel.findByIdAndUpdate(req.params.id,{
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
route.get("/find/:id",async(req,res)=>{
    try{
        const data= await ProductModel.findById(req.params.id);
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})
route.delete('/:id',verifyTokenAdmin,async(req,res)=>{

    try{
        await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");    
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = route;