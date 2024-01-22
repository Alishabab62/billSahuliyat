import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const FileUpload = () => {
    const [file,setFile] = useState(null);
    const [name,setName] = useState("");
    const handleSubmit=(e) => {
        e.preventDefault();
        let serverPath = "%2fUsers%2fweblogic%2fTest";
        const url = "http://172.18.2.96:8888/WCCService/resources/wccgeneric/checkin?fileName="+name+"&filePath="+serverPath+"&dDocType="+file.type
        axios.get(url).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        })
    }
  return (
    <div>
        <form >
            <input type="text" placeholder='Enter file name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="file" onChange={(e)=>(setFile(e.target.files[0]))}/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default FileUpload