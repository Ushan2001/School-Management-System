import React,{useState} from "react";
import axios from "axios";
import NavBar from "../NavBar/Navbar";
import {useHistory } from "react-router-dom";

export default function CreateStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [number, setNumber] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newStudent = {
              name,
              age,
              address,
              gender,
              number
          }
      
          axios.post("http://localhost:8000/student/save", newStudent).then(() =>{
              alert("Student Record Added")
              history.push("/student"); 
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
              <h2>Create New Student Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Student Name" 
    onChange={(e) =>{

        setName(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student Age"
     onChange={(e) =>{

        setAge(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student Address"
     onChange={(e) =>{

        setAddress(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Gender</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student Gender"
     onChange={(e) =>{

        setGender(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Index Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student Index Number"
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
