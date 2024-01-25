import React,{useState} from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function CreateExam() {

    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [subject, setSubject] = useState("");
    const [tid, setID] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newExam = {
              name,
              grade,
              venue,
              date,
              subject,
              tid
              
          }
      
          axios.post("http://localhost:8000/exam/save", newExam).then(() =>{
              alert("Exam Record Added")
              history.push("/exam"); 
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
              <h2>Create Exam Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Exam Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder="Enter Exam Name" 
    onChange={(e) =>{

        setName(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Grade</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter class Name"
     onChange={(e) =>{

        setGrade(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Venue</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Exam Venue"
     onChange={(e) =>{

        setVenue(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Exam Date</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Exam Date"
     onChange={(e) =>{

        setDate(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Subject Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Subject Name"
     onChange={(e) =>{

        setSubject(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Teacher ID</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Teacher ID"
     onChange={(e) =>{

        setID(e.target.value);
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
