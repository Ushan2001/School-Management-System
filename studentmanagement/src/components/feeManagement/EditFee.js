import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function EditFee(props) {


    const [id, setId] = useState("");
    const [topic, setTopic] = useState("");
    const [reference, setReference] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");
    const history = useHistory();

    useEffect(() => {
        const feeId = props.match.params.id;
    
        axios.get(`http://localhost:8000/fee/${feeId}`).then((res) => {
          const fee = res.data.fee;
    
         setId(fee._id); 
         setTopic(fee.topic);
         setReference(fee.reference);
         setType(fee.type);
         setAmount(fee.amount);
         setDate(fee.date);
         setNote(fee.note);
         

          
          
        });
      }, [props.match.params.id]);
    
      function sendData(e) {
        e.preventDefault();
    
        const updateFee = {
          topic,
          reference,
          type,
          amount,
          date,
          note
        };
    
        axios.put(`http://localhost:8000/fee/update/${id}`, updateFee).then(() => {
          alert("Payment Record Updated");
            history.push("/fee"); 
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
        <h2>Edit Payment Record</h2>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Topic</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Payment Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Reference Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Reference Number"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Payment Type</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Payment Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
          <label htmlFor="exampleInputPassword1" className="form-label">Additional Note</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Additional Note"
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
