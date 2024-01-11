import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import {setusername } from './actions/useractions'


function Login() {
   const value=useSelector((s)=>{
    return s
   })
   console.log(value)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function handlelogin(e){
    e.preventDefault()
    const formdata={
      email:emailstate,
      password:passwordstate
    }
      dispatch(setusername(formdata,navigate))
  }

  const[emailstate,setemailstate]=useState(null)
  const[passwordstate,setpasswordstate]=useState(null)
   
  return (
    <div className='bg-green-500 h-dvh  flex justify-center items-center '>
   <form className="w-1/4 py-5 px-5 border-2 border-black " onSubmit={handlelogin}>
    <h1 className='text-2xl text-center' style={{fontFamily:'sans-serif'}}>Login</h1>
  <div className="mb-3 flex flex-col">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" onChange={(e)=>{
          setemailstate(e.target.value)
    }}/>
  </div>
  
  <div className="mb-3 flex flex-col">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={(e)=>{
      setpasswordstate(e.target.value)
    }}/>
  </div>
  
  <button type="submit" className="btn btn-primary bg-green-950 text-white px-3 py-1 rounded">Submit</button>
</form>


{/*<button onClick={()=>{
  axios.post("http://localhost:3000/cookie", {},{
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  })
}}>cookie</button>*/}

      
    </div>
  )
}

export default Login
