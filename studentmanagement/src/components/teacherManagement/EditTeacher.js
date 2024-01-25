import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function EditTeacher(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSuject] = useState("");
    const [gender, setGender] = useState("");
    const [number, setNumber] = useState("");
    const history = useHistory();

    useEffect(() => {
        const teacherId = props.match.params.id;
    
        axios.get(`http://localhost:8000/teacher/${teacherId}`).then((res) => {
          const teacher = res.data.teacher;
    
          setId(teacher._id);
          setName(teacher.name);
          setAge(teacher.age);
          setAddress(teacher.address);
          setSuject(teacher.subject)
          setGender(teacher.gender);
          setNumber(teacher.number);
          
          
        });
      }, [props.match.params.id]);
    
      function sendData(e) {
        e.preventDefault();
    
        const updateTeacher = {
          name,
          age,
          address,
          subject,
          gender,
          number
        };
    
        axios.put(`http://localhost:8000/teacher/update/${id}`, updateTeacher).then(() => {
          alert("Teacher Record Updated");
            history.push("/teacher"); 
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
        <h2>Edit Teacher Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Teacher Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Teacher Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Teacher Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Teacher Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSuject(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Teacher Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Index Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Teacher Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
