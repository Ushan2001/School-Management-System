import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function EditEvent(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        const eventId = props.match.params.id;
    
        axios.get(`http://localhost:8000/event/${eventId}`).then((res) => {
          const event = res.data.event;
    
          setId(event._id);
          setName(event.name);
          setVenue(event.venue);
          setDate(event.date);
          setAmount(event.amount)
          setDescription(event.description);
        
        });
      }, [props.match.params.id]);
    
      function sendData(e) {
        e.preventDefault();
    
        const updateEvent = {
          name,
          venue,
          date,
          amount,
          description
        };
    
        axios.put(`http://localhost:8000/event/update/${id}`, updateEvent).then(() => {
          alert("Event Record Updated");
            history.push("/event"); 
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
        <h2>Edit Event Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Event Venue</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Event Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Event Date</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Event Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Estimate Amount</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Estimate Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
