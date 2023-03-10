const express=require("express");
const userRoute=require("./user.routes");
const productRoute=require("./product.routes");
const { notFound, errorHandler } = require("../middlewares/Errors");
const router=express.Router();

router.use('/api/users',userRoute)
router.use('/api/products',productRoute)
router.use(notFound)
router.use(errorHandler)
module.exports=router