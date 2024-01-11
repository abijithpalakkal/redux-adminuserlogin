const express=require("express")
const Users=require("../model/mongoose/userSchema")
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router=express.Router()

router.get("/userdata",async(req,res)=>{
    const data=await Users.find()
    res.json({data})
})

router.post("/deletedata",async(req,res)=>{
    console.log(req.body)
    try{
        await Users.findByIdAndDelete(req.body.userid)
        res.json({success:true})
    }catch{
        res.json({success:false})
    }
  


})

router.post("/getuser",async(req,res)=>{
    console.log("*******************")
    console.log(req.body.id)
    const data=await Users.findById(req.body.id)
    console.log(data)
    res.json({data})
})

router.post("/edituser/:id",async(req,res)=>{
    console.log("***********************************")
    console.log(req.body)
    try{
        await Users.findByIdAndUpdate(req.params.id,req.body)
        res.json({success:true})
    }catch{
        res.json({success:false})
    }
   
   
})
router.post("/adminlogout",async(req,res)=>{
    console.log("beep")
    console.log(req.cookies.adminJwt)
    jwt.verify(req.cookies.adminJwt,process.env.secretecode,async (err,decode)=>{
        if(decode?.userId==process.env.adminusername){
            res.clearCookie('adminJwt');
            res.json({success:true})
        }else{
            res.json({success:false})
        }
          
          
    })

    
})

module.exports=router