const mongoose =require("mongoose");

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
 orderItems:[
    {
        name:{type:String,required:true},
        qty:{type:Number,required:true},
        image:{type:String, required:true},
        price:{type:Number, required:true},
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Product",
        }
    }
 ],
 shippingAddress:{
    address:{type:String, required:true},
    city:{type: String, required:true},
    postalCode: {type:String, required: true},
    country:{ type: String, required: true}
 },
 paymentMethode:{
    
 }
},
{
    timestamps:true
}
);
const Order=mongoose.model("Order",orderSchema)
module.exports =Order