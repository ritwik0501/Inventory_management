const BaseRepo= require("../../shared/repositories/BaseRepository");
 const productSchema=require("./product.models");

class ProductReposiory extends BaseRepo{
 constructor(){
    super(productSchema);
 }
 async findallProducts(){
   try {
      const responce= await productSchema.find();
      return responce;
   } catch (error) {
      console.error("Error to get all products");
      throw new Error("Unable to get all error");
   }
 }
}
module.exports= ProductReposiory;