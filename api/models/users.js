const mongoose=require("mongoose")


const userSchema = new mongoose.Schema({
   id:{
       type:Number,
       required:true

   },
    fName:{
       type:String,
       required:true 
   },
   lName:{
       type:String,
       requiredL:false
   }
});
 

module.exports=mongoose.model("User", userSchema);