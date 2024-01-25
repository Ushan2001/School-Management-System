import React,{useState} from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function CretateFee() {

    const [topic, setTopic] = useState("");
    const [reference, setReference] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newFee = {
              topic,
              reference,
              type,
              amount,
              date,
              note
          }
      
          axios.post("http://localhost:8000/fee/save", newFee).then(() =>{
              alert("Payment Record Added")
              history.push("/fee"); 
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
              <h2>Create Payment Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Topic</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder="Enter Payment Topic" 
     required
    onChange={(e) =>{

        setTopic(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Reference Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Reference Number "
    required
     onChange={(e) =>{

        setReference(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Payment Type</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Payment Type"
    required
     onChange={(e) =>{

        setType(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Amount</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
     placeholder="Enter Amount"
     pattern="\d+(\.\d{2})?"
     required
     onChange={(e) =>{

        setAmount(e.target.value);
    }}/>
  </div>
 
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Date</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
     placeholder="Enter Date"
     required
     onChange={(e) =>{

        setDate(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Additional Note</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Additional Note"
    required
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
