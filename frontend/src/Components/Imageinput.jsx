
import axios from 'axios';
import React ,{useState} from 'react'
import { useNavigate} from 'react-router-dom';

function Imageinput(props) {
    const naviagte=useNavigate()
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      // Get the selected file from the input
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      // Use 'selectedFile' to upload the file to the server
      // You can use FormData, Axios, or any other method to send the file to the server
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios.post("http://localhost:3000/file", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true, // Add this line to include credentials
        }).then((res)=>{
            if(res.data.success){
             props.fun(false)
            }else{
                alert("something wrong! please try again")
            }
        })
        // Add your file upload logic here, such as using Axios
        // axios.post('your-upload-endpoint', formData).then(response => {
        //   console.log(response.data);
        // });
      }else{
        alert("something wrong! please try again") 
      }
    };
  return (
    <div>
        
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{backgroundColor:'red',padding: '5px 20px',borderRadius: '20px'} }>Upload</button>
    </div>
  )
}

export default Imageinput
