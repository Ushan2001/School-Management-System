import React,{useState} from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function CreateReport() {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newReport = {
              title,
              date,
              type,
              description
              
          }
      
          axios.post("http://localhost:8000/report/save", newReport).then(() =>{
              alert("Report Record Added")
              history.push("/report"); 
              window.location.reload(); 
          }).catch((err)=>{
              alert(err)
          })
      
      
      }


  return (
    <div>
      <NavBar/>
      <div className="container" style={{ marginTop:"63px"}}>
            <form onSubmit={sendData}>
              <h2>Create Report Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder="Enter Report Title" 
    onChange={(e) =>{

        setTitle(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Date Range</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Report Date Range"
     onChange={(e) =>{

        setDate(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Report Type</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Report Type"
     onChange={(e) =>{

        setType(e.target.value);
    }}/>
  </div>


  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Your Description"
     onChange={(e) =>{

        setDescription(e.target.value);
    }}/>
  </div>

  <button type="submit" className="btn btn-success" style={{marginTop:"15px"}}>
  <i className='far fa-check-square'></i>
  &nbsp; Save
  </button>
</form>
        </div>
    </div>
  )
}
