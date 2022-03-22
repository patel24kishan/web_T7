const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const User=require("../models/users");

const router=express.Router();

router.delete("/:id",async(req,res)=>{
    const usrId =req.params.id;
    try{
    const user=User.findByIdAndDelete(usrId);
    return res.status(500).json({success:"true",message:"User Deleted"});
    }catch(err){
        console.log(err)
    return res.status(500).json({success:"false",message:"User not Deleted"});
    }
});

module.exports=router;
 