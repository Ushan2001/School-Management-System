import React, { Component } from 'react'
import axios from "axios";
import NavBar from '../NavBar/Navbar';


export default class StudentList extends Component {

    constructor(props){
        super(props)

        this.state = {
            students:[]
        }
    }

    componentDidMount(){
        this.retriveStudent()
    }

    retriveStudent(){
        axios.get("http://localhost:8000/students").then((res) =>{
            if(res.data.success){
                this.setState({
                    students:res.data.existingStudent
                })

                console.log(this.state.students)
            }
        })
    }

    filterData(students, searchKey){
   
        const result =  students.filter((student) =>
           student.name.toLowerCase().includes(searchKey) ||
           student.number.toLowerCase().includes(searchKey) 
           
        )
      
        this.setState({students:result})
      
      }

    handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/students").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingStudent, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/student/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveStudent();
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
        
        <h2>All Student</h2>
         <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Student Name</th>
                    <th scope='col'>Index</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>

        <tbody>
            {this.state.students.map((students, index) =>(
                <tr key={index}>
                    <th scope='row'>{index+1}</th>
                    <td>
                        <a href= {`/student/${students._id}`} style={{textDecoration:"none"}}>
                        {students.name}
                        </a>
                        </td>
                    <td>{students.number}</td>
                    
                    <td>
                        <a className='btn btn-warning' href={`/editstudent/${students._id}`}>
                            <i className='fas fa-edit'></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(students._id)}>
                            <i className='fas fa-trash-alt'></i>&nbsp;Delete
                        </a>
                    </td>
                </tr>
            ))}
    
        </tbody>
         </table>

         <button className='btn btn-success'><a href='/add/student' style={{textDecoration:"none", color:"white"}}>Add New Student</a></button>
        
      </div>

      </div>
      
     
    )
  }
}
