const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const User=require("../models/users");

const router=express.Router();

router.put("/:id",async(req,res)=>{
    const id=req.params.id
    try{
         const user=await User.findByIdAndUpdate(id, { $set: {
                fName:req.body.fName,
                lName:req.body.lName
            }
        }, options, callback)
        const updateUser = await user.save();
        return res.status(500).json({success:"true",message:"User Updated",data:updateUser});

    }catch(err){
        return res.status(500).json({success:"false",message:"User not Updated"});
    }
});

module.exports=router;