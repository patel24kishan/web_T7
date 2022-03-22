const express=require("express");
const mongoose=require("mongoose")
const bodyParser=require("body-parser");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app =express();

const dbURL="mongodb+srv://admin:admin@cluster0.c0jqj.mongodb.net/tutorial06?retryWrites=true&w=majority"
mongoose.connect(dbURL,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log("Connected......")
})

const userRoute=require("./api/routes/getData");
const postRoute=require("./api/routes/postData");
const putRoute=require("./api/routes/updateData");
const deleteRoute=require("./api/routes/deleteData");

app.use(bodyParser.json())
app.use("/users",userRoute);
app.use("/add",postRoute);
app.use("/update",putRoute);
app.use("/delete",deleteRoute)

module.exports=app;