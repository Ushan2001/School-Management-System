import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function EditClass(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [sid, setSid] = useState("");
    const [sname, setSname] = useState("");
    const [teacher, setTeacher] = useState("");
    const [note, setNote] = useState("");
    const history = useHistory();

    useEffect(() => {
        const classMId = props.match.params.id;
    
        axios.get(`http://localhost:8000/class/${classMId}`).then((res) => {
          const classM = res.data.classM;
    
          setId(classM._id);
          setName(classM.name);
          setSid(classM.sid);
          setSname(classM.sname);
          setTeacher(classM.teacher);
          setNote(classM.note)
       
        
        });
      }, [props.match.params.id]);

      function sendData(e) {
        e.preventDefault();
    
        const updateClass = {
          name,
          sid,
          sname,
          teacher,
          note
          
        };
    
        axios.put(`http://localhost:8000/class/update/${id}`, updateClass).then(() => {
          alert("Class Record Updated");
            history.push("/class"); 
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
        <h2>Edit Class Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Class Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Class Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Subject Code</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Subject Code"
            value={sid}
            onChange={(e) => setSid(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Subject Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Subject Name"
            value={sname}
            onChange={(e) => setSname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Teacher Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Teacher Name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
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
