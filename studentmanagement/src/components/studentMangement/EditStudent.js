import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/Navbar";
import {useHistory } from "react-router-dom";

export default function EditStudent(props) {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const history = useHistory();

  useEffect(() => {
    const studentId = props.match.params.id;

    axios.get(`http://localhost:8000/student/${studentId}`).then((res) => {
      const student = res.data.student;

      setId(student._id);
      setName(student.name);
      setAge(student.age);
      setAddress(student.address);
      setGender(student.gender);
      setNumber(student.number);
      
      
    });
  }, [props.match.params.id]);

  function sendData(e) {
    e.preventDefault();

    const updateStudent = {
      name,
      age,
      address,
      gender,
      number
    };

    axios.put(`http://localhost:8000/student/update/${id}`, updateStudent).then(() => {
      alert("Student Record Updated");
      history.push("/student"); 
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
        <h2>Edit Student Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Student Name"
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
            placeholder="Enter Student Age"
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
            placeholder="Enter Post Category Here"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Student Gender"
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
            placeholder="Enter Student Number"
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

