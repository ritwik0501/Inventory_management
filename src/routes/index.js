const router= require("express").Router();
const ProductRouter= require("../modules/product/routes/index");

router.use("/Product",ProductRouter);

module.exports=router;