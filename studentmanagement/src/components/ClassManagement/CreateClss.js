import React,{useState} from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function CreateClss() {

    const [name, setName] = useState("");
    const [sid, setSid] = useState("");
    const [sname, setSname] = useState("");
    const [teacher, setTeacher] = useState("");
    const [note, setNote] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newClass = {
              name,
              sid,
              sname,
              teacher,
              note
              
          }
      
          axios.post("http://localhost:8000/class/save", newClass).then(() =>{
              alert("Class Record Added")
              history.push("/class"); 
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
              <h2>Create Class Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Class Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder="Enter Class Name" 
    onChange={(e) =>{

        setName(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Subject Code</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Subject Code"
     onChange={(e) =>{

        setSid(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Subject Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Subject Name"
     onChange={(e) =>{

        setSname(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Teache Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Teacher Name"
     onChange={(e) =>{

        setTeacher(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Additional Information</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Additional Information"
     onChange={(e) =>{

        setNote(e.target.value);
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
