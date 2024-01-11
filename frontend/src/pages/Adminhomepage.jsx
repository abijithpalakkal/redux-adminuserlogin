import React, { useState } from 'react'
import Adminhome from '../Components/Adminhome'
import Adminheader from '../Components/Adminheader'

function Adminhomepage() {
  const [query,setquery]=useState(null)
  return (
    <div>
        <Adminheader fn={setquery}/>
        <Adminhome query1={query}/>
      
    </div>
  )
}

export default Adminhomepage
