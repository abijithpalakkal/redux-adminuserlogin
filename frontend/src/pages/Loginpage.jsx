import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Login from '../Components/Login'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Loginpage() {
  const navigate=useNavigate()
  const v=useSelector((state)=>{
  return state.userauth
  })
  useEffect(() => {
    // Redirect to the home page if the user is authenticated
    if (v) {
      navigate('/home');
    }})
  
  
  return (
    <div>
      <Header head={"signup"}/>
      <Login/>
    </div>
  )
}

export default Loginpage
