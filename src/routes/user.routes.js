const express=require("express");
const ImportData=require("../../DataImport")
const router=express.Router();


router.post('/user',ImportData)

module.exports=router