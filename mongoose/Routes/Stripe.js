const express=require('express');
const route=express.Router();
const stripe= require('stripe')(process.env.stripeKey)

route.post('/payment',(req,res)=>{
    console.log("server is okk");
    stripe.charges.create({     
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd"
    },
    (striperErr,stripeRes)=>{
        if(striperErr){
            res.status(500).json(striperErr);
        }else{
            res.status(200).json(stripeRes);
        }
    }
    )
})
module.exports=route;