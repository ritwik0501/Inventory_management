const mongoose = require("mongoose")
const connectDB = require("./database/mongo.connection");
require('dotenv').config()
const app1 = require("./app")


connectDB(() => {
    app1.listen(3000, () => {
        console.log("Server is started");
    })
});