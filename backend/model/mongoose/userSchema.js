const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/redux")
.then(()=>{
    console.log('connected successfully')
}).catch((e)=>{
  console.log("failed to connect mongodb"+e)
})

const userSchema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    mobile:{
        type:Number
    },
    password:{
        type:String
    },
    image:{
        type:String
    }
})

const Users = mongoose.model('User', userSchema);

module.exports=Users
