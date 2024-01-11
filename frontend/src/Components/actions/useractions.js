import axios from "axios"




const usertrue=()=>{
    return{
        type:"usertrue"
    }
}
const setuser=(data)=>{
    return{
        type:"setusername",
        payload:data
    }
}

const setuserid=(data)=>{
  return{
      type:"setuserid",
      payload:data
  }
}




export  const setusername=(formdata,navigate)=>{
    
    return (dispatch)=>{
        
        axios.post("http://localhost:3000/login",formdata, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }).then((response)=>{
        console.log(response)
          if(response.data.success=="admin"){
            navigate("/adminhome")
            dispatch({
              type:"admintrue"
            })
          }else{
        console.log(response)
        if(response.data.success){
            dispatch(usertrue())
        dispatch(setuser(response.data.name))
        dispatch(setuserid(response.data._id))
          navigate("/home")
        }else{
          alert("wrong email or password")
        }
      }}).catch((e)=>{
        console.log(e)
      })
    }
}
export const userlogout=(navigate)=>{
    return (dispatch)=>{
    axios.post("http://localhost:3000/userlogout", {},{
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  }).then((response)=>{
    console.log(response)
     dispatch({
        type:"userfalse"
     })
     dispatch(setuser(null))
     dispatch(setuserid(null))
    if(response.data.success){
        navigate("/")
    }
  })
}
}


export const adminlogout=(navigate)=>{
  console.log("beep beep")
  return (dispatch)=>{
  axios.post("http://localhost:3000/adminlogout", {},{
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
}).then((response)=>{
  console.log(response,"*************")
   dispatch({
      type:"adminfalse"
   })
  
   
  if(response.data.success){
      navigate("/")
  }
}).catch((e)=>{console.log(e,"********")})
}
}



export const checkuserauth=()=>{
    return (dispatch)=>{
        console.log("its here")
        axios.post("http://localhost:3000/checkuserauth", {},{
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((response)=>{
      console.log(response.data)
      if(response.data.success){
        dispatch(usertrue())
        dispatch(setuser(response.data.name))
        dispatch(setuserid(response.data._id))
      }
    
      
    }).catch((e)=>{
        console.log(e)
    })
    }
}
