const router= require("express").Router();
const prodcutController=require("../../product.controller");

router.post("/createproduct",prodcutController.createProductController);


module.exports=router;