const mongoose= require("mongoose")
const env = require('dotenv') 
env.config();

const connectDB= async(callback)=>{
try{ 
 mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database Connected ✅ ")
    callback();
});
}catch(error){
console.error("Failed to connect with Database ❌",error);
}
}

module.exports=connectDB;