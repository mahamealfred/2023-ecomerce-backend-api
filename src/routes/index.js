const express=require("express");
const userRoute=require("./user.routes");
const productRoute=require("./product.routes");
const router=express.Router();

router.use('/api/users',userRoute)
router.use('/api/products',productRoute)
module.exports=router