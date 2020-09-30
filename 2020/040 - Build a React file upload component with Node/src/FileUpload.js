import React, { useState } from "react";
import axios from "axios";

function FileUpload() {

  const [fileData, setFileData] = useState("");
  const getFile = (e) => {
    setFileData(e.target.files[0]);
  };

  const uploadFile = (e) => { 
    e.preventDefault();   
    const data = new FormData();
    data.append("file", fileData);
    axios({
      method: "POST",
      url: "http://localhost:5000/upload",
      data: data,
    }).then((res) => {       
        alert(res.data.message);
    });
  };

  return (
    <form onSubmit={uploadFile}>
      <input type="file" name="file" onChange={getFile} required />
      <input type="submit" name="upload" value="Upload" />
    </form>
  );
}

export default FileUpload;