const express = require('express');
const route = express.Router();
const { verifyToken, verifyTokenUser, verifyTokenAdmin } = require('./VerifyToken')
const User = require('../Models/User');
const OrderModel = require('../Models/Order');

route.post("/New", async (req, resp) => {
    try {
        const Order = await new OrderModel(req.body);
        const Orderdata = await Order.save();
        resp.status(200).json(Orderdata);
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
route.put("/:id",verifyTokenAdmin,async (req,resp)=>{
    try{
        const updateOrder= await OrderModel.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {
            new:true
        }
        );
        resp.status(200).json(updateOrder);
    }
    catch(err){
        resp.status(500).json(err);
    }
})
route.get("/Find",verifyTokenAdmin,async(req,res)=>{
    try{
        const data= await OrderModel.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})


route.delete('/:id',verifyTokenAdmin,async(req,res)=>{

    try{
        await OrderModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");    
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = route;