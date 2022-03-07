const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app =express();

const postRoute=require("./api/routes/postRoute");
const userRoute=require("./api/routes/userRoute");
const putRoute=require("./api/routes/putRoute");

app.use("/users",userRoute);
app.use("/add",postRoute);
app.use("/update",putRoute);

module.exports=app;