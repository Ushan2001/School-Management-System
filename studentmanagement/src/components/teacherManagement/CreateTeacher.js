import React,{useState} from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function CreateTeacher() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [gender, setGender] = useState("");
    const [number, setNumber] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newTeacher = {
              name,
              age,
              address,
              subject,
              gender,
              number
          }
      
          axios.post("http://localhost:8000/teacher/save", newTeacher).then(() =>{
              alert("Teacher Record Added")
              history.push("/teacher"); 
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
              <h2>Create New Teacher Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Teacher Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Teacher Name" 
    onChange={(e) =>{

        setName(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Teacher Age"
     onChange={(e) =>{

        setAge(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Teacher Address"
     onChange={(e) =>{

        setAddress(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Subject</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Teacher Subject"
     onChange={(e) =>{

        setSubject(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Gender</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Teacher Gender"
     onChange={(e) =>{

        setGender(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Teacher ID</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Teacher ID"
     onChange={(e) =>{

        setNumber(e.target.value);
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
