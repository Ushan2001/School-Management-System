import React, { Component } from 'react'
import axios from "axios";
import NavBar from '../NavBar/Navbar';

export default class FeeList extends Component {

    constructor(props){
        super(props)

        this.state = {
            fees:[]
        }
    }

    componentDidMount(){
        this.retriveFee()
    }

    retriveFee(){
        axios.get("http://localhost:8000/fee").then((res) =>{
            if(res.data.success){
                this.setState({
                    fees:res.data.existingFee
                })

                console.log(this.state.fees)
            }
        })
    }

    filterData(fees, searchKey){
   
        const result =  fees.filter((fee) =>
           fee.topic.toLowerCase().includes(searchKey) ||
           fee.reference.toLowerCase().includes(searchKey) 
           
        )
      
        this.setState({fees:result})
      
      }

    handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/fee").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingFee, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/fee/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveFee();
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
            placeholder='Serch'
            name="serchQuery"
            style={{marginLeft:"1000px"}}
            onChange={this.handleSearchArea}/>
        </div>



<h2>All Payment</h2>
<table className='table table-hover'>
   <thead>
       <tr>
           <th scope='col'>#</th>
           <th scope='col'>Payment Topic</th>
           <th scope='col'>Reference</th>
           <th scope='col'>Action</th>
       </tr>
   </thead>

<tbody>
   {this.state.fees.map((fees, index) =>(
       <tr key={index}>
           <th scope='row'>{index+1}</th>
           <td>
               <a href= {`/fee/${fees._id}`} style={{textDecoration:"none"}}>
               {fees.topic}
               </a>
               </td>
           <td>{fees.reference}</td>
           
           <td>
               <a className='btn btn-warning' href={`/editfee/${fees._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               &nbsp;
               <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(fees._id)}>
                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
               </a>
           </td>
       </tr>
   ))}

</tbody>
</table>

<button className='btn btn-success'><a href='add/fee' style={{textDecoration:"none", color:"white"}}>Add New Details</a></button>

</div>
      </div>
    )
  }
}
