import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Useredit() {
  const navigate=useNavigate()
  const {id}=useParams()
  console.log(id)
  const[state,setstate]=useState(null)
  
    useEffect(()=>{
      console.log("************")
      axios.post("http://localhost:3000/getuser",{id}, {withCredentials: true}).then((response)=>{
        
      console.log(response.data.data)
      setstate(response.data.data)

      }).catch((e)=>{
        console.log(e)
      })
      
    },[])
  
    const handlesubmit=(e)=>{
      e.preventDefault();
      axios.post(`http://localhost:3000/edituser/${id}`,state, {withCredentials: true}).then((response)=>{
        if(response.data.success){
          navigate("/adminhome")
        }else{
          alert("update failed")
        }
      }).catch((e)=>{
        console.log(e)
      })
    }

  return (
    <div className='bg-green-500 h-dvh  flex justify-center items-center '>
        
    <form className="w-1/4 py-5 px-5 border-2 border-black " onSubmit={handlesubmit} >
     <h1 className='text-2xl text-center' style={{fontFamily:'sans-serif'}}>Edit user</h1>
   <div className="mb-3 flex flex-col">
     <label htmlFor="username" className="form-label">name</label>
     <input type="text" className="form-control" id="username" onChange={(e)=>{
          setstate({
            ...state,
            username:e.target.value
          })
     }}  value={state?.username} />
   </div>
   <div className="mb-3 flex flex-col">
     <label htmlFor="email" className="form-label">Email</label>
     <input type="email" className="form-control" id="email" onChange={(e)=>{
          setstate({
            ...state,
            email:e.target.value
          })
     }} value={state?.email}/>
   </div>
   <div className="mb-3 flex flex-col">
     <label htmlFor="mobile" className="form-label">Mobile</label>
     <input type="number" className="form-control" id="mobile" onChange={(e)=>{
          setstate({
            ...state,
            mobile:e.target.value
          })
     }} value={state?.mobile}/>
   </div>
   <div className="mb-3 flex flex-col">
     <label htmlFor="age" className="form-label">Age</label>
     <input type="number" className="form-control" id="age" onChange={(e)=>{
         setstate({
          ...state,
          age:e.target.value
        })
     }} value={state?.age}/>
   </div>
   <div className="mb-3 flex flex-col">
     <label htmlFor="password" className="form-label">Password</label>
     <input type="password" className="form-control" id="password" onChange={(e)=>{
          setstate({
            ...state,
            password:e.target.value
          })
     }} value={state?.password}/>
   </div>
   
   <button type="submit" className="btn btn-primary bg-green-950 text-white px-3 py-1 rounded">Submit</button>
 </form>
 
 
       
     </div>
  )
}

export default Useredit
