import React, { Component } from 'react'
import axios from "axios";
import Navbar from '../NavBar/Navbar';

export default class ReportList extends Component {

    constructor(props){
        super(props)

        this.state = {
            reports:[]
        }
    }

    componentDidMount(){
        this.retriveReport()
    }

    retriveReport(){
        axios.get("http://localhost:8000/reports").then((res) =>{
            if(res.data.success){
                this.setState({
                     reports:res.data.existingReport
                })

                console.log(this.state.reports)
            }
        })
    }

    filterData(reports, searchKey){
   
        const result =  reports.filter((report) =>
           report.title.toLowerCase().includes(searchKey) ||
           report.type.toLowerCase().includes(searchKey) 
        
        )
      
        this.setState({reports:result})
      
      }

      handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/reports").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingReport, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/report/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveReport();
        })
    }


  render() {
    return (
      <div>
        <Navbar/>
        <div className='container' style={{marginTop:"50px"}}>


<div className='col-lg-3 mt-2 mb-2'>
   <input  className="form-control"
   type='search'
   placeholder='Serch'
   name="serchQuery"
   style={{marginLeft:"1000px"}}
   onChange={this.handleSearchArea}/>
</div>

<h2>All Report</h2>
<table className='table table-hover'>
   <thead>
       <tr>
           <th scope='col'>#</th>
           <th scope='col'>Title</th>
           <th scope='col'>Type</th>
           <th scope='col'>Action</th>
       </tr>
   </thead>

<tbody>
   {this.state.reports.map((reports, index) =>(
       <tr key={index}>
           <th scope='row'>{index+1}</th>
           <td>
               <a href= {`/report/${reports._id}`} style={{textDecoration:"none"}}>
               {reports.title}
               </a>
               </td>
           <td>{reports.type}</td>
           
           
           <td>
               <a className='btn btn-warning' href={`/editreport/${reports._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               &nbsp;
               <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(reports._id)}>
                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
               </a>
           </td>
       </tr>
   ))}

</tbody>
</table>

<button className='btn btn-success'><a href='/add/report' style={{textDecoration:"none", color:"white"}}>Add New Report</a></button>

</div>
      </div>
    )
  }
}
