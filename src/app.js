const express = require("express")
const app = express();
const router=require("./routes/index");


app.use(express.json())
app.use(express.urlencoded({extended:true}));



//THIS IS FOR HEALTH CHECK 
 app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"Server is healthy"
    })
 })


 app.use("/api",router);

 
module.exports= app;