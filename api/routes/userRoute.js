const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const userObj=require("../database/users");

const router=express.Router();

router.get("",(req,res)=>{

    return res.status(500).json({message:"Users retrieved",success:"true",data:userObj});
});

router.get("/:id",(req,res)=>{

    const username=req.params.id;
    console.log(username)

    const u = userObj.filter(u=>{
        return u.firstName===username
    })[0];
     return res.status(500).json({message:"Users retrieved",success:"true",data:u});
});

module.exports=router;