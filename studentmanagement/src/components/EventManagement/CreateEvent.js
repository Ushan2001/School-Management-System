import React,{useState} from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

export default function CreateEvent() {

    const [name, setName] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    function sendData(a){

        a.preventDefault();
        const newEvent = {
              name,
              venue,
              date,
              amount,
              description
              
          }
      
          axios.post("http://localhost:8000/event/save", newEvent).then(() =>{
              alert("Event Record Added")
              history.push("/event"); 
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
              <h2>Create Event Record</h2>
              <br></br>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Event Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder="Enter Event Name" 
    onChange={(e) =>{

        setName(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Event Venue</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Event Venue"
     onChange={(e) =>{

        setVenue(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Event Date</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Event Date"
     onChange={(e) =>{

        setDate(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Estimate Amount</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Amount"
     onChange={(e) =>{

        setAmount(e.target.value);
    }}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" 
    placeholder="Enter Your Description"
     onChange={(e) =>{

        setDescription(e.target.value);
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
