import React, { Component } from 'react'
import axios from "axios";
import Navbar from '../NavBar/Navbar';

export default class CourseList extends Component {

    constructor(props){
        super(props)

        this.state = {
            courses:[]
        }
    }

    componentDidMount(){
        this.retriveCourse()
    }

    retriveCourse(){
        axios.get("http://localhost:8000/courses").then((res) =>{
            if(res.data.success){
                this.setState({
                     courses:res.data.existingCourse
                })

                console.log(this.state.courses)
            }
        })
    }

    filterData(courses, searchKey){
   
        const result =  courses.filter((course) =>
           course.cid.toLowerCase().includes(searchKey) ||
           course.name.toLowerCase().includes(searchKey) ||
           course.credit.toLowerCase().includes(searchKey)
           
        )
      
        this.setState({courses:result})
      
      }

    handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/courses").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingCourse, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/course/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveCourse();
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

<h2>All Courses</h2>
<table className='table table-hover'>
   <thead>
       <tr>
           <th scope='col'>#</th>
           <th scope='col'>ID</th>
           <th scope='col'>Name</th>
           <th scope='col'>Credit</th>
           <th scope='col'>Action</th>
       </tr>
   </thead>

<tbody>
   {this.state.courses.map((courses, index) =>(
       <tr key={index}>
           <th scope='row'>{index+1}</th>
           <td>
               <a href= {`/course/${courses._id}`} style={{textDecoration:"none"}}>
               {courses.cid}
               </a>
               </td>
           <td>{courses.name}</td>
           <td>{courses.credit}</td>
           
           <td>
               <a className='btn btn-warning' href={`/editcourse/${courses._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               &nbsp;
               <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(courses._id)}>
                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
               </a>
           </td>
       </tr>
   ))}

</tbody>
</table>

<button className='btn btn-success'><a href='/add/course' style={{textDecoration:"none", color:"white"}}>Add New Course</a></button>

</div>
      </div>
    )
  }
}
