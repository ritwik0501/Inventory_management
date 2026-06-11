const BaseRepo= require("../../shared/repositories/BaseRepository");
 const productSchema=require("./product.models");

class ProductReposiory extends BaseRepo{
 constructor(){
    super(productSchema);
 }
}
module.exports= ProductReposiory;