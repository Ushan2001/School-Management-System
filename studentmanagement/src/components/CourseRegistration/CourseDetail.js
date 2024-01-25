import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../NavBar/Navbar';

export default class CourseDetail extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          course:{}
        }
      }

      componentDidMount(){
 
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/course/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              course:res.data.course
            })
    
            console.log(this.state.course)
          }
        })
    
      }
  render() {

    const {cid, name, credit, date, note} = this.state.course;
    return (
      <div>
        <Navbar/>
        <div style={{marginTop:"40px"}} className='container'>
          <h4>{name}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Course ID</dt>
        <dd className='col-sm-9'>{cid}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Course Credit</dt>
        <dd className='col-sm-9'>{credit}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Add Date</dt>
        <dd className='col-sm-9'>{date}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Additinol Infromation</dt>
        <dd className='col-sm-9'>{note}</dd>
      </dl>
      </div>
      </div>
    )
  }
}
