const express =require("express");
const User=require("./src/models/UserModel");
const Product=require("./src/models/ProductModel");
const users=require("./src/data/users");
const products=require("./src/data/products");
const asyncHandler=require("express-async-handler")
const ImportData=express.Router();

ImportData.post("/user",asyncHandler(async(req,res)=>{
     //await User.remove({})
     const importUser=await User.insertMany(users)
     res.send({importUser})
 })
);
ImportData.post("/product",asyncHandler(async(req,res)=>{
   // await Product.remove({})
    const importUser=await Product.insertMany(products)
    res.send({importUser})
})
);
module.exports=ImportData