import React, { Component } from 'react'
import axios from "axios";
import NavBar from '../NavBar/Navbar';

export default class EventList extends Component {

    constructor(props){
        super(props)

        this.state = {
            events:[]
        }
    }

    componentDidMount(){
        this.retriveEvents()
    }

    retriveEvents(){
        axios.get("http://localhost:8000/events").then((res) =>{
            if(res.data.success){
                this.setState({
                     events:res.data.existingEvent
                })

                console.log(this.state.events)
            }
        })
    }

    filterData(events, searchKey){
   
        const result =  events.filter((event) =>
           event.name.toLowerCase().includes(searchKey) ||
           event.venue.toLowerCase().includes(searchKey) ||
           event.date.toLowerCase().includes(searchKey)
           
        )
      
        this.setState({events:result})
      
      }

    handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/events").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingEvent, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/event/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveEvents();
        })
    }

  render() {
    return (
      <div>
        <NavBar/>
        <div className='container' style={{marginTop:"50px"}}>


<div className='col-lg-3 mt-2 mb-2'>
   <input  className="form-control"
   type='search'
   placeholder='Search'
   name="serchQuery"
   style={{marginLeft:"1000px"}}
   onChange={this.handleSearchArea}/>
</div>

<h2>All Events</h2>
<table className='table table-hover'>
   <thead>
       <tr>
           <th scope='col'>#</th>
           <th scope='col'>Event Name</th>
           <th scope='col'>Venue</th>
           <th scope='col'>Date</th>
           <th scope='col'>Action</th>
       </tr>
   </thead>

<tbody>
   {this.state.events.map((events, index) =>(
       <tr key={index}>
           <th scope='row'>{index+1}</th>
           <td>
               <a href= {`/event/${events._id}`} style={{textDecoration:"none"}}>
               {events.name}
               </a>
               </td>
           <td>{events.venue}</td>
           <td>{events.date}</td>
           
           <td>
               <a className='btn btn-warning' href={`/editevent/${events._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               &nbsp;
               <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(events._id)}>
                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
               </a>
           </td>
       </tr>
   ))}

</tbody>
</table>

<button className='btn btn-success'><a href='/add/event' style={{textDecoration:"none", color:"white"}}>Add New Event</a></button>

</div>
      </div>
    )
  }
}
