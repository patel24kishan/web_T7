const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const bodyParser=require("body-parser");

const userObj=require("../database/users");

const router=express.Router();
router.use(bodyParser.json())
router.put("/:id",(req,res)=>{

    userObj.forEach(element => {
        console.log(req.params.id)
        if (element.id===req.params.id){
            element.firstName=req.body.firstName;
            element.email=req.body.email;
        }
    });
    res.send(userObj)
});

module.exports=router;