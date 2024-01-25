import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";


export default function EditExam(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [subject, setSubject] = useState("");
    const [tid, setID] = useState("");
    const history = useHistory();

    useEffect(() => {
        const examId = props.match.params.id;
    
        axios.get(`http://localhost:8000/exam/${examId}`).then((res) => {
          const exam = res.data.exam;
    
          setId(exam._id);
          setName(exam.name);
          setGrade(exam.grade);
          setVenue(exam.venue);
          setDate(exam.date);
          setSubject(exam.subject)
          setID(exam.tid);
        
        });
      }, [props.match.params.id]);
    
      function sendData(e) {
        e.preventDefault();
    
        const updateExam = {
          name,
          grade,
          venue,
          date,
          subject,
          tid
        };
    
        axios.put(`http://localhost:8000/exam/update/${id}`, updateExam).then(() => {
          alert("Exam Record Updated");
            history.push("/exam"); 
            window.location.reload(); 
        }).catch((err) => {
          alert(err);
        });
      }
    

  return (
    <div>
       <NavBar/>
      <div className="container" style={{ marginTop:"63px"}}>
      <form onSubmit={sendData}>
        <h2>Edit Exam Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Exam Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Exam Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Grade</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter class Name"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Venue</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Exam Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Exam Date</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Exam Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Subject Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Subject Name"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Teacher ID</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Teacher ID"
            value={tid}
            onChange={(e) => setID(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success" style={{ marginTop: "15px" }}>
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
      </form>
    </div>
    </div>
  )
}
