const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const User=require("../models/users");

const router=express.Router();

router.post("",async(req,res)=>{
    console.log(req.body)
     const newUser = new User({
            id:req.body.id,
            fName:req.body.fName,
            lName:req.body.lName
        })
    try{
        const saveuser = await newUser.save();
        return res.status(500).json({success:"true",message:"User added"});
    }catch(err){
        return res.status(500).json({success:"false",message:"User not added"});
    }
});


module.exports=router;