import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../NavBar/Navbar';

export default class ExamDetail extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          exam:{}
        }
      }

      componentDidMount(){
 
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/exam/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              exam:res.data.exam
            })
    
            console.log(this.state.exam)
          }
        })
    
      }

  render() {

    const {name, grade, venue, date, subject, tid } = this.state.exam;
    return (
      <div>
        <Navbar/>
        <div style={{marginTop:"40px"}} className='container'>
          <h4>{name}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Class Name</dt>
        <dd className='col-sm-9'>{grade}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Exam Venue</dt>
        <dd className='col-sm-9'>{venue}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Exam Date</dt>
        <dd className='col-sm-9'>{date}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Subject Name</dt>
        <dd className='col-sm-9'>{subject}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Teacher ID</dt>
        <dd className='col-sm-9'>{tid}</dd>
      </dl>
      </div>
      </div>
    )
  }
}
