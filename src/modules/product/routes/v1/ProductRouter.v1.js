const router= require("express").Router();
const prodcutController=require("../../product.controller");

router.post("/createproduct",prodcutController.createProductController);
router.get("/allproducts",prodcutController.getALlProductsController);

module.exports=router;