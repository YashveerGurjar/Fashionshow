const express = require('express');
const route = express.Router();
const { verifyToken, verifyTokenUser, verifyTokenAdmin } = require('./VerifyToken')
const User = require('../Models/User');
const CartModel = require('../Models/Cart');

route.post("/New", async (req, resp) => {
    try {
        const Addcart = await new CarttModel(req.body);
        const data = await Addcart.save();
        resp.status(200).json(data);
    }
    catch (err) {
        resp.status(500).json(err);
    }
})

route.get('/Find/:userid',verifyTokenUser, async(req, res) => {
    try {
         const data = await CartModel.find({userid:req.params.userid});
         res.status(200).json(data);
        }
    catch (err) {
        res.status(500).json(err);
    }
})
route.put("/:id",verifyTokenUser,async (req,resp)=>{
    try{
        const updateCart= await CartModel.findByIdAndUpdate(req.params.id,{
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
route.get("/Find",verifyTokenAdmin,async(req,res)=>{
    try{
        const data= await CartModel.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})


route.delete('/:id',verifyTokenUser,async(req,res)=>{

    try{
        await CartModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");    
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = route;