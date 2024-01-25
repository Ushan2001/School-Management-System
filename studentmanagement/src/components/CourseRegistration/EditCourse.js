import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function EditCourse(props) {

    const [id, setId] = useState("");
    const [cid, setCID] = useState("");
    const [name, setName] = useState("");
    const [credit, setCredit] = useState("");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");
    const history = useHistory();

    useEffect(() => {
        const courseId = props.match.params.id;
    
        axios.get(`http://localhost:8000/course/${courseId}`).then((res) => {
          const course = res.data.course;
    
          setId(course._id);
          setCID(course.cid);
          setName(course.name);
          setCredit(course.credit);
          setDate(course.date);
          setNote(course.note)
       
        
        });
      }, [props.match.params.id]);

      function sendData(e) {
        e.preventDefault();
    
        const updateCourse = {
          cid,
          name,
          credit,
          date,
          note
          
        };
    
        axios.put(`http://localhost:8000/course/update/${id}`, updateCourse).then(() => {
          alert("Course Record Updated");
            history.push("/course"); 
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
        <h2>Edit Course Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Course ID</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Course ID"
            value={cid}
            onChange={(e) => setCID(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Credit</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Course Credit"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Date</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Additional Information</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Additional Information"
            value={note}
            onChange={(e) => setNote(e.target.value)}
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
