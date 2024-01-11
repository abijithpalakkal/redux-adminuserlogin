import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userlogout } from './actions/useractions'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  function handlelogout(){
    dispatch(userlogout(navigate))
  }
const value=useSelector((state)=>{
return state.username
})

  return (
    <div>
         <nav className="flex justify-between items-center bg-green-800 p-4 text-white">
      <div>
        <span className="text-2xl font-bold">Greenstore</span>
      </div>
      <div className="flex space-x-4">
        <button
         
          className="hover:text-gray-300" onClick={()=>{ navigate("/editprofile")}}
        >
          Profile
        </button>
        <button className="hover:text-gray-300" onClick={handlelogout}>
          Logout
        </button>
      </div>
    </nav>
    <div className="min-h-screen bg-gradient-to-r  p-8" style={{background: 'linear-gradient(to right, green, lightgreen)'}}>
    <h1 style={{fontWeight:'bolder' , marginBottom:'20px'}}>welcome {value}</h1>
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-md shadow-md text-gray-800">
              <h2 className="text-xl font-bold mb-4 text-blue-700">
                Product 1
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                euismod lacus ut eros fringilla, vel consequat felis finibus.
                Integer id facilisis nulla.
              </p>
              <p className="mt-4 text-blue-500 underline cursor-pointer">
                Read More
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-md shadow-md text-gray-800">
              <h2 className="text-xl font-bold mb-4 text-blue-700">
                Service 2
              </h2>
              <p className="text-gray-600">
                Fusce nec urna a nulla accumsan sodales. Vivamus vel malesuada
                sapien, id efficitur mi. Vestibulum dapibus mauris ac felis
                bibendum, vel tincidunt sem varius.
              </p>
              <p className="mt-4 text-blue-500 underline cursor-pointer">
                Read More
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-md shadow-md text-gray-800">
              <h2 className="text-xl font-bold mb-4 text-blue-700">Event 3</h2>
              <p className="text-gray-600">
                Aenean ullamcorper libero vel est tincidunt, at malesuada elit
                fermentum. Nullam eget lectus vel justo bibendum facilisis. Sed
                nec nulla at nunc commodo pharetra eu nec metus.
              </p>
              <p className="mt-4 text-blue-500 underline cursor-pointer">
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home
