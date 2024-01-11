import React,{useState,useReducer,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Createuser() {
    
    const navigate=useNavigate()
    function handlesignupsubmit(e){
        e.preventDefault()
        const {username,email,mobile,age,password}=setloginstate

        if(!username || !email || !mobile || !age  || !password){
            alert("please fill all input in the form")
        }
        else if(password!=state){
            alert("both pasword must be same")
        }
        else{
            axios.post('http://localhost:3000/signup',setloginstate).then((response)=>{
                if(response.data.state==true){
                  navigate("/adminhome")
                }
            }).catch(()=>{
                console.log("mayday error")
            })
        }
        }
    
     const[state,setstate]=useState(null)
function reducer(state,action){
switch (action.type) {
    case "chgname":
        return {
            ...state,
            username:action.payload
        }
        case "chgemail":
            return {
                ...state,
                email:action.payload
            }
            case "chgmobile":
        return {
            ...state,
            mobile:action.payload
        }
        case "chgage":
        return {
            ...state,
            age:action.payload
        }
        case "chgpassword":
        return {
            ...state,
            password:action.payload
        }
        
        

    default:
        return{
            ...state
        }
}
}
const[setloginstate,dispatch]=useReducer(reducer,{
    username:null,
    email:null,
    mobile:null,
    age:null,
    password:null,
    
})

useEffect(()=>{
    console.log(setloginstate)
},[])
  return (
    <div className='bg-green-500 h-dvh  flex justify-center items-center '>
        
   <form className="w-1/4 py-5 px-5 border-2 border-black " onSubmit={handlesignupsubmit}>
    <h1 className='text-2xl text-center' style={{fontFamily:'sans-serif'}}>Create User</h1>
  <div className="mb-3 flex flex-col">
    <label htmlFor="username" className="form-label">name</label>
    <input type="text" className="form-control" id="username" onChange={(e)=>{
         dispatch({
            type:"chgname",
            payload:e.target.value
         })
    }} />
  </div>
  <div className="mb-3 flex flex-col">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>{
         dispatch({
            type:"chgemail",
            payload:e.target.value
         })
    }}/>
  </div>
  <div className="mb-3 flex flex-col">
    <label htmlFor="mobile" className="form-label">Mobile</label>
    <input type="number" className="form-control" id="mobile" onChange={(e)=>{
         dispatch({
            type:"chgmobile",
            payload:e.target.value
         })
    }}/>
  </div>
  <div className="mb-3 flex flex-col">
    <label htmlFor="age" className="form-label">Age</label>
    <input type="number" className="form-control" id="age" onChange={(e)=>{
         dispatch({
            type:"chgage",
            payload:e.target.value
         })
    }}/>
  </div>
  <div className="mb-3 flex flex-col">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={(e)=>{
         dispatch({
            type:"chgpassword",
            payload:e.target.value
         })
    }}/>
  </div>
  <div className="mb-3 flex flex-col">
    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="confirmPassword" onChange={(e)=>{
        setstate(e.target.value)
    }}/>
  </div>
  <button type="submit" className="btn btn-primary bg-green-950 text-white px-3 py-1 rounded">Submit</button>
</form>


      
    </div>
  )
}

export default Createuser
