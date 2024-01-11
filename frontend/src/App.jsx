
import Loginpage from './pages/loginpage'
import Signuppage from './pages/signuppage'
import Homepage from './pages/Homepage'

import store from './redux/store'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { checkuserauth } from './Components/actions/useractions'
import Adminhomepage from './pages/Adminhomepage'
import Editpage from './pages/editpage'
import Editprofilepage from './pages/Editprofilepage'

function App() {
  console.log("hello")
  const userauth=useSelector((state)=>{
   return state.userauth
  })
  const adminauth=useSelector((state)=>{
    return state.adminauth
   })
const dispatch=useDispatch()
  useEffect(()=>{
    if(!userauth){
      dispatch(checkuserauth())

    }
  },[])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          {userauth && <Route path="/home" element={<Homepage />} />}
          <Route path="/editprofile" element={<Editprofilepage/>} />


         {adminauth && <Route path="/adminhome" element={<Adminhomepage />} />}
          <Route path="/useredit/:id" element={<Editpage />} />
         
          
        </Routes>
      </Router>
 


    </>
  )
}

export default App
