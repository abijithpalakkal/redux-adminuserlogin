const express=require("express")
const Users=require("../model/mongoose/userSchema")
const jwt = require('jsonwebtoken');
require('dotenv').config();
const multer = require('multer');


const router=express.Router()

router.post("/signup",async (req,res)=>{
  
      // Save the user to the database
      const savedUser = await Users.create(req.body);
      res.json({state:true})

})
router.post("/login",async(req,res)=>{
      console.log(req.body,"*************")
      if(req.body.email==process.env.adminusername && req.body.password==process.env.adminpassword){
            const secretKey=process.env.secretecode
                        console.log(secretKey)
                        const payload = {
                              userId:process.env.adminusername,
                            };
                            const options = {
                              expiresIn: '1d', 
                            };
                            
                            
                            const token = jwt.sign(payload, secretKey, options);
                            
                              res.cookie("adminJwt",token, {
                               maxAge: 30 * 24 * 60 * 60 * 1000,
                              });
          res.json({success:"admin"})
      }else{
            try{
                  const user=await Users.findOne(req.body)
                  
                  if(user){
                        const secretKey=process.env.secretecode
                        console.log(secretKey)
                        const payload = {
                              userId: user._id,
                            };
                            const options = {
                              expiresIn: '1d', 
                            };
                            
                            
                            const token = jwt.sign(payload, secretKey, options);
                            
                              res.cookie("userJwt",token, {
                               maxAge: 30 * 24 * 60 * 60 * 1000,
                              });
      
      
                        res.json({success:true,name:user.username,_id:user._id})
                  }else{
                        res.json({success:false})
                  }
            }catch(e){
                  console.log(e)
            }
      }
      
     
})
router.post("/userlogout",async(req,res)=>{
      console.log(req.cookies.userJwt)
      jwt.verify(req.cookies.userJwt,process.env.secretecode,async (err,decode)=>{
            console.log(decode)
            try{
                 const data= await Users.findById(decode.userId)
                 if(data){
                  res.clearCookie('userJwt');
                  res.json({success:true})
                 }
                 
            }catch(e){
                  console.log(e)
                  res.json({success:false})
            }
            
      })

      
})
router.post("/checkuserauth",(req,res)=>{
      console.log("****")
      if(req.cookies.userJwt){
            jwt.verify(req.cookies.userJwt,process.env.secretecode,async(err,decode)=>{
                  const data=await Users.findById(decode.userId)
            if(data){
                  res.json({success:true,name:data.username,_id:data._id})
            }else{
                  res.json({success:false})
            }
            })
            
      }else{
            res.json({success:false})
      }
}) 

router.post("/file",async(req,res)=>{
      console.log("/**/*/*/*/*/*/")
      console.log(req.cookies.userJwt)
      jwt.verify(req.cookies.userJwt,process.env.secretecode,async(err,decode)=>{
            try{
                  const data=await Users.findByIdAndUpdate(decode.userId,{image:req.file.filename})
                  res.json({success:true})

            }catch(e)
{
      console.log(e)
      res.json({success:false})

}      })

      
})


router.post("/getimgname",(req,res)=>{
      Users.findByIdAndUpdate(req.body.userId).then((data)=>{
          res.json({imagename:data.image,data1:data})
      })
})


module.exports=router

