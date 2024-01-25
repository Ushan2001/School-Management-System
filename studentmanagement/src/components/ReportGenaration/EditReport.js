import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function EditReport(props) {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        const reportId = props.match.params.id;
    
        axios.get(`http://localhost:8000/report/${reportId}`).then((res) => {
          const report = res.data.report;
    
          setId(report._id);
          setTitle(report.title);
          setDate(report.date);
          setType(report.type)
          setDescription(report.description);
        
        });
      }, [props.match.params.id]);
    
      function sendData(e) {
        e.preventDefault();
    
        const updateReport = {
          title,
          date,
          type,
          description
        };
    
        axios.put(`http://localhost:8000/report/update/${id}`, updateReport).then(() => {
          alert("Event Record Updated");
            history.push("/report"); 
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
        <h2>Edit Report Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Report Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Date Range</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Date Range"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Report Type</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Date Range"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
