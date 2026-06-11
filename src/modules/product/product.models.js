const mongoose= require("mongoose");

const productSchema =new mongoose.Schema({

    sku:{
        type:String,
        required :true,
        unique:true,
        trim:true,
        uppercase:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    supplierId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
        required:false // now it will be false but after creating suppelier it must be true 
    },
    purchasePrice:{
        type:Number,
        required:true,
        min:0
    },
    sellingPrice:{
        type:Number,
        required:true,
        min:0
    },
    isActive:{
        type:Boolean,
        default:true
    },
     
})
productSchema.set('timestamps',true);

module.exports=mongoose.model("product",productSchema);