import React from 'react'
import { useNavigate } from 'react-router-dom'


function Header(props) {
  const navigate=useNavigate()
  return (
    <div className="bg-green-950 text-white text-lg flex justify-between px-3 py-3">
         <div>GreenStore</div>
         <div onClick={()=>{
          if(props.head=="signup"){
            navigate("/signup")
          }else{
            navigate("/")
          }
        
         }}>{props.head=="signup"?"signup":"login"}</div>
    </div>
  )
}

export default Header
