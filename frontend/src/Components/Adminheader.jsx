import React from 'react'
import { adminlogout } from './actions/useractions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function Adminheader(props) {
    const dispatch=useDispatch()
const navigate=useNavigate()
    function handleadminlogout(){
        dispatch(adminlogout(navigate)) 
    }

  return (
    
      
    <div className="bg-green-950 text-white text-lg flex justify-between px-3 py-3">
         <div>GreenStore</div>
         <div className="flex justify-between">
         <input
        type="text"
        placeholder="Search..."
        style={{marginRight:'50px',color:'black'}}
      onChange={(e)=>{
        props.fn(e.target.value)
      }}/>
         <div onClick={handleadminlogout}>logout</div>
         </div>
    </div>

  )
}

export default Adminheader
