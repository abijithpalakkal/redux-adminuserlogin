import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Adminhome(props) {
  console.log("query",props.query1)
const navigate=useNavigate()
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const [refresh,setrefresh]=useState(false)
  const [FilteredData,setFilteredData]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/userdata', {
          withCredentials: true,
        });
        setdata(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, [refresh]);

  useEffect(() => {
    if (!props.query1) {
      setFilteredData(data);
    } else {
      const filteredResult = data.filter(
        (obj) => obj.email.toLowerCase().startsWith(props.query1.toLowerCase())
      );
      setFilteredData(filteredResult);
    }
    console.log("*********",FilteredData)
  }, [props.query1, data]);


  async function handledelete(userid){
    const data1=await axios.post('http://localhost:3000/deletedata',{userid}, {withCredentials: true})
    if(!data1.data.success){
      alert("failed to delete")
    }else{
      setrefresh(!refresh)
    }
  }

  function handleedit(id){
    console.log("hello saydg shj")
   navigate(`/useredit/${id}`)
  }

  return (
    <div>
      <button style={{backgroundColor:'green',padding: '5px 20px',borderRadius: '20px',marginTop:'20px'} } onClick={()=>{navigate("/createuser")}}>create user</button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">sr.np</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">username</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Mobile Number</th>
              <th className="border p-2">Password</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          {FilteredData.map((element,i)=>(
          <tbody>
            <tr className=''>
              <td className="border p-2">{i+1}</td>
              <td className="border p-2">{element.username}</td>
              <td className="border p-2">{element.email}</td>
              <td className="border p-2">{element.age}</td>
              <td className="border p-2">{element.mobile}</td>
              <td className="border p-2">*******</td>
              <td className="border p-2 flex space-x-2">
                <button style={{backgroundColor:'green',padding: '5px 20px',borderRadius: '20px'} } onClick={()=>{handleedit(element._id)}}>edit</button>
                <button style={{backgroundColor:'red' ,padding: '5px 20px',borderRadius: '20px'} } onClick={()=>{handledelete(element._id)}}>delete</button>
              </td>
            </tr>
            {/* Add more rows based on your data */}
          </tbody>))}
        </table>
      )}
    </div>
  );
}

export default Adminhome;
