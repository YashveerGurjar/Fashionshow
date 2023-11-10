const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema(
    {
        title:{type:String,required:true},
        info:{type:String,required:true},
        tax:{type:String},
        desc:{type:String,required:true},
        img:{type:String,required:true},
        categories:{type:Array},
        size:{type:Array},   
        color:{type:Array},
        mrp:{type:String,default:"MRP"},
        amount:{type:Number},
        price:{type:Number,required:true}
    },
    {
        timestamps:true
    }
)
    module.exports=mongoose.model('Product',ProductSchema);