const express = require("express")
const app = express();


 app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"Server is healthy"
    })
 })

 
module.exports= app;