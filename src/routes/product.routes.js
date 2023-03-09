const express=require("express");
const ImportData=require("../../DataImport")
const {addNewUser,getAllProducts}=require("../controllers/productController");
const router=express.Router();


router.post('/product',addNewUser)
router.get('/',getAllProducts)

module.exports=router