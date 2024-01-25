import React,{useState} from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function CreateCourse() {

    const [cid, setCID] = useState("");
    const [name, setName] = useState("");
    const [credit, setCredit] = useState("");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newCourse = {
              cid,
              name,
              credit,
              date,
              note
              
          }
      
          axios.post("http://localhost:8000/course/save", newCourse).then(() =>{
              alert("Course Record Added")
              history.push("/course"); 
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
              <h2>Create Course Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Course ID</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder="Enter Course ID" 
    onChange={(e) =>{

        setCID(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Course Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Course Name"
     onChange={(e) =>{

        setName(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Credit</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Course Credit"
     onChange={(e) =>{

        setCredit(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Date</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Date"
     onChange={(e) =>{

        setDate(e.target.value);
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
