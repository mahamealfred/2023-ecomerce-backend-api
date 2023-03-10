const express=require("express");
const ImportData=require("../../DataImport")
const {addNewUser,
    getAllProducts,
    getProduct
}=require("../controllers/productController");
const router=express.Router();


router.post('/product',addNewUser)
router.get('/',getAllProducts)
router.get('/:id',getProduct)

module.exports=router