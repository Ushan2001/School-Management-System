import React, { Component } from 'react'
import axios from "axios";
import NavBar from '../NavBar/Navbar';

export default class TeacherList extends Component {

    constructor(props){
        super(props)

        this.state = {
            teachers:[]
        }
    }

    componentDidMount(){
        this.retriveTeacher()
    }

    retriveTeacher(){
        axios.get("http://localhost:8000/teachers").then((res) =>{
            if(res.data.success){
                this.setState({
                    teachers:res.data.existingTeacher
                })

                console.log(this.state.teachers)
            }
        })
    }

    filterData(teachers, searchKey){
   
        const result =  teachers.filter((teacher) =>
           teacher.name.toLowerCase().includes(searchKey) ||
           teacher.number.toLowerCase().includes(searchKey) 
           
        )
      
        this.setState({teachers:result})
      
      }

    handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/teachers").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingTeacher, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/teacher/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveTeacher();
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

<h2>All Teachers</h2>
<table className='table table-hover'>
   <thead>
       <tr>
           <th scope='col'>#</th>
           <th scope='col'>Teacher Name</th>
           <th scope='col'>Teacher ID</th>
           <th scope='col'>Action</th>
       </tr>
   </thead>

<tbody>
   {this.state.teachers.map((teachers, index) =>(
       <tr key={index}>
           <th scope='row'>{index+1}</th>
           <td>
               <a href= {`/teacher/${teachers._id}`} style={{textDecoration:"none"}}>
               {teachers.name}
               </a>
               </td>
           <td>{teachers.number}</td>
           
           <td>
               <a className='btn btn-warning' href={`/editteacher/${teachers._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               &nbsp;
               <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(teachers._id)}>
                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
               </a>
           </td>
       </tr>
   ))}

</tbody>
</table>

<button className='btn btn-success'><a href='/add/teacher' style={{textDecoration:"none", color:"white"}}>Add New Teacher</a></button>

</div>
        
      </div>
    )
  }
}

