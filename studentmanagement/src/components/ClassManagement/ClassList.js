import React, { Component } from 'react'
import axios from "axios";
import Navbar from '../NavBar/Navbar';

export default class ClassList extends Component {

    constructor(props){
        super(props)

        this.state = {
            classes:[]
        }
    }

    componentDidMount(){
        this.retriveClass()
    }

    retriveClass(){
        axios.get("http://localhost:8000/classes").then((res) =>{
            if(res.data.success){
                this.setState({
                     classes:res.data.existingClass
                })

                console.log(this.state.classes)
            }
        })
    }

    filterData(classes, searchKey){
   
        const result =  classes.filter((classM) =>
           classM.name.toLowerCase().includes(searchKey) ||
           classM.sname.toLowerCase().includes(searchKey) ||
           classM.teacher.toLowerCase().includes(searchKey)
           
        )
      
        this.setState({classes:result})
      
      }

    handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/classes").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingClass, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/class/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveClass();
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
   placeholder='Search'
   name="serchQuery"
   style={{marginLeft:"1000px"}}
   onChange={this.handleSearchArea}/>
</div>

<h2>All Classes</h2>
<table className='table table-hover'>
   <thead>
       <tr>
           <th scope='col'>#</th>
           <th scope='col'>Class Name</th>
           <th scope='col'>Subject Name</th>
           <th scope='col'>Teacher</th>
           <th scope='col'>Action</th>
       </tr>
   </thead>

<tbody>
   {this.state.classes.map((classes, index) =>(
       <tr key={index}>
           <th scope='row'>{index+1}</th>
           <td>
               <a href= {`/class/${classes._id}`} style={{textDecoration:"none"}}>
               {classes.name}
               </a>
               </td>
           <td>{classes.sname}</td>
           <td>{classes.teacher}</td>
           
           <td>
               <a className='btn btn-warning' href={`/editclass/${classes._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               &nbsp;
               <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(classes._id)}>
                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
               </a>
           </td>
       </tr>
   ))}

</tbody>
</table>

<button className='btn btn-success'><a href='/add/class' style={{textDecoration:"none", color:"white"}}>Add New Class</a></button>

</div>
      </div>
    )
  }
}
