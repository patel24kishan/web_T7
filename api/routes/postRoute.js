const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const bodyParser=require("body-parser");
const userObj=require("../database/users");

const router=express.Router();
router.use(bodyParser.json())
router.post("",(req,res)=>{

    userObj.push(req.body);
    console.log(req.body);
    return res.status(501).json({message:"POST request",data:userObj});
});

module.exports=router;