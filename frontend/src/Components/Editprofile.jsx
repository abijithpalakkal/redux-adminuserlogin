import React, { useEffect, useState } from 'react'
import Imageinput from './Imageinput'
import axios from 'axios'
import { useSelector } from 'react-redux'
function Editprofile() {
  const[page,setpage]=useState(false)
  const[image,setimage]=useState(null)
  
  
    const userId = useSelector((state) => state.userid);
    console.log(userId,"*********");
    useEffect(()=>{
      if(userId != null){
        axios.post("http://localhost:3000/getimgname",{userId}).then((response)=>{
          console.log(response.data,"************************************************************")
          setimage(response.data)

        })
      }
      
    },[userId])
  
  

  return (
    
    <div className="min-h-screen bg-gradient-to-r " style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to right, green, lightgreen)'}}>
      <div style={{border:'5px solid black ',padding:'20px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{width:'200px'}}>
        <img style={{borderRadius: '50%' }} src={`http://localhost:3000/uploads/${image?.imagename}`} alt="" />
       
      </div>
      <button className="mt-4 mb-4" onClick={() => setpage(!page)} style={{backgroundColor:'green',padding: '5px 20px',borderRadius: '20px'} }>Edit profile photo</button>
      <div>
        {page? <Imageinput fun={setpage}/>:
        <>
        <p style={{fontWeight:'bold'}}>name: {image?.data1.username}</p>
        <p style={{fontWeight:'bold'}}>username: {image?.data1.email}</p>
        <p style={{fontWeight:'bold'}}>age: {image?.data1.age}</p>
        <p style={{fontWeight:'bold'}}>mobile no: {image?.data1.mobile}</p>
       
         </>
  }
      </div>
      </div>
    </div>
  )
  
}

export default Editprofile
//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAYFBMVEX29vZCQkL7+/s+Pj7p6en///85OTk2NjYzMzNFRUXz8/OampqWlpbu7u7Q0NAsLCyPj4+qqqp5eXlwcHDY2NhMTEzBwcEmJiajo6Nra2vf399mZmZhYWFcXFy5ublSUlJrzunWAAADgklEQVR4nO2a2Y7iMBBF43K8hqxkI2z//5djJ/TCAMkAcoqR6ki0QDz07VuLy5WOIoIgCIIgCIIgCIIgCIIgiP8dG0XgEADYSm7x2oRIh6xt26xOhcAW9BfetrbYnw1jzDS7ooWPUghRXJpOczbCpc5ZGX9ImC04eaeDluwXRupjG32IQoDEXKkbkSyZKsViy7OH/Eads5Dlh/QDHIS4ys0dfY68irHVOX2Fvq/OoQt0A0V5L7jfDva4fcbCMKbaQ/iA6iBEM9H1yMJiCoSs4bP62LlGlBdBf9v4rlE9pn/2uKDPyCNif4ZhrngncsQKEadupnYnA7sTXosRxZJ/3OQFor5KL/nHdIWob6eW5Bm1xdS31F4Mpj7r4rvkB258N49Gqx/yDaK+tluML2Z/geEf4os6wezl7HjlBpg9ojoLpTTzAlWJOgDW5/n5SqLOV240SeYzUCeI8iJ/e3s0oI5B5w32GsGNMOyxQszmcgE292cEXzd6A+j7A0gfXpF04bVhX4HBVg/2GxX26uUClFz9KorpjWYleu5Fl+yCbKfkVZuWcpt9gjx/hgBYYdud1HIqZO7e7Vu/FxTYueeXf0OfORkCsrI6nI1pzoeqzEC4b7J+wFyW+8WpSJOjbPrUywEbD1lWD7H1NSui/iyPSYoV5cmYslGcG92UsQ+mf77gfjgzIS4bF26umtIFGqGOwf/OetdN8xXveNHWqfUpZ9O4bgvZXZKx29VIQRanozJf7YRrftwWSV+Wm2J7dp8MM+MZwtTxhKIPCjVaZLi5zIDSo9xrOt2YP5hdjLk75lZXCHF15+5xf1I1XbX2GOMOteXVwQ+qWndN+aQ8fwtO19Q3rnWfE1isqE70y/fK3/i/ZLVVvuvAWcefMo/5Cs/9MbhGq4Z4v7QWuofcr/U0KVncqt0a6AxXm1XUueg+VxqTQPfqsjWajNjqF/Sxy6oycP5ZENmL8vx9bgUD04o/2fp+kCt06Wxh4zJLE97A/vni/YbLJLS+9PBK7/vSxw+BAwz18hOtOfI6qIFWJMsb8Rn/TJ6EPYXF/o30c6h94CnhLXWeoPsiqJ8brG4Jm4DQvqXPpa5uQwZYlG6sNy/jj7igWy3xwmh1jQpawLB5ozuPyE3Q/Cskfwumwv7LUxq/S+gD7m3C6iMIgiAIgiAIgiAIgiAIgiAIgiAIYob3H/gF5Q+7GytpVgGxYQAAAABJRU5ErkJggg==