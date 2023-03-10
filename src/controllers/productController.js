const express =require("express");
const Product=require("../models/ProductModel");
const asyncHandler=require("express-async-handler")

const addNewUser=asyncHandler(async(req,res)=>{
    const {name,description,price,countInStock,rating,numReviews,image}=req.body
    //const {image}=req.file
    // await Product.remove({})
    try {
        const data=await Product.create({
            name,
            image,
            description,
            price,
            countInStock,
            rating,
            numReviews
        })
       return   res.status(200).json({
               statusCode:200,
               message:"Successfull",
               data:data
                  })   
        
    } catch (error) {
      res.status(200).json({
        statusCode:500,
        message:error.message
      })  
    }
   
 });
 const getAllProducts=asyncHandler(async(req,res)=>{
    try{
        const products=await Product.find({});
        return res.status(200).json({
            statusCode:200,
            message:"All Products",
            data:products
               }) 
    }catch (error) {
      res.status(200).json({
        statusCode:500,
        message:error.message
      })  
    } 
 })
 const getProduct=asyncHandler(async(req,res)=>{
  const id=req.params.id
  try{
      const product=await Product.findById(id);
      if(product){
        return res.status(200).json({
          statusCode:200,
          message:"Product",
          data:product
             }) 
      }else{
        return res.status(200).json({
          statusCode:404,
          message:"Product not found",
             }) 
      }
     
  }catch (error) {
    res.status(200).json({
      statusCode:500,
      message:error.message
    })  
  } 
})
module.exports={addNewUser,getAllProducts,getProduct}