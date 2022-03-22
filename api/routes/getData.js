const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const User=require("../models/users");

const router=express.Router();

router.get("/",async(req,res)=>{
    try{
        const user = await User.find()
        return res.status(500).json({success:"true",message:"Users Retrieved",data:user});

    }catch(err){
        return res.status(500).json({success:"false",message:"Users Not Retrieved"});
    }
});

router.get("/:id",async(req,res)=>{

    const usrID=req.params.id
     try{
        const user = await User.findById(usrID)
        return res.status(500).json({success:"true",message:"User Retrieved",data:user});
    }catch(err){
        return res.status(500).json({success:"false",message:"User not Retrieved"});
    }
});

module.exports=router;