import React, { Component } from 'react'
import axios from "axios";
import Navbar from '../NavBar/Navbar';

export default class ExamList extends Component {

    constructor(props){
        super(props)

        this.state = {
            exams:[]
        }
    }

    componentDidMount(){
        this.retriveExams()
    }

    retriveExams(){
        axios.get("http://localhost:8000/exams").then((res) =>{
            if(res.data.success){
                this.setState({
                     exams:res.data.existingExam
                })

                console.log(this.state.exams)
            }
        })
    }

    filterData(exams, searchKey){
   
        const result =  exams.filter((exam) =>
           exam.name.toLowerCase().includes(searchKey) ||
           exam.grade.toLowerCase().includes(searchKey) ||
           exam.date.toLowerCase().includes(searchKey)
           
        )
      
        this.setState({exams:result})
      
      }

    handleSearchArea = (e) =>{
        const searchKey =  e.currentTarget.value
     
        axios.get("http://localhost:8000/exams").then((res) =>{
                 if(res.data.success){
                     
                   this.filterData(res.data.existingExam, searchKey)
     
                    
                 }
             })
     }

     onDelete = (id) =>{
        axios.delete(`http://localhost:8000/exam/delete/${id}`).then((res) =>{
            alert("Delete Susccessfully");
            this.retriveExams();
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

<h2>All Exam List</h2>
<table className='table table-hover'>
   <thead>
       <tr>
           <th scope='col'>#</th>
           <th scope='col'>Exam Name</th>
           <th scope='col'>Grade</th>
           <th scope='col'>Date</th>
           <th scope='col'>Action</th>
       </tr>
   </thead>

<tbody>
   {this.state.exams.map((exams, index) =>(
       <tr key={index}>
           <th scope='row'>{index+1}</th>
           <td>
               <a href= {`/exam/${exams._id}`} style={{textDecoration:"none"}}>
               {exams.name}
               </a>
               </td>
           <td>{exams.grade}</td>
           <td>{exams.date}</td>
           
           <td>
               <a className='btn btn-warning' href={`/editexam/${exams._id}`}>
                   <i className='fas fa-edit'></i>&nbsp;Edit
               </a>
               &nbsp;
               <a className='btn btn-danger' href='# ' onClick={() => this.onDelete(exams._id)}>
                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
               </a>
           </td>
       </tr>
   ))}

</tbody>
</table>

<button className='btn btn-success'><a href='/add/exam' style={{textDecoration:"none", color:"white"}}>Add New Exam</a></button>

</div>
      </div>
    )
  }
}
