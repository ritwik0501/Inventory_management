const express = require("express")
const app = express();

//THIS IS FOR HEALTH CHECK 
 app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"Server is healthy"
    })
 })

 
module.exports= app;