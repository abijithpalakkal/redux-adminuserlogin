import React from 'react'
import Editprofile from '../Components/Editprofile'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userlogout } from '../Components/actions/useractions'

function Editprofilepage() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function handlelogout(){
        dispatch(userlogout(navigate))
      }
  return (
    <div>
    <nav className="flex justify-between items-center bg-green-800  p-4 text-white">
      <div>
        <span className="text-2xl font-bold" onClick={()=>{navigate("/home")}}>Greenstore</span>
      </div>
      <div className="flex space-x-4">
        <button
         
          className="hover:text-gray-300"
        >
          Profile
        </button>
        <button className="hover:text-gray-300" onClick={handlelogout}>
          Logout
        </button>
      </div>
    </nav>
    <Editprofile/>
      
    </div>
  )
}

export default Editprofilepage
