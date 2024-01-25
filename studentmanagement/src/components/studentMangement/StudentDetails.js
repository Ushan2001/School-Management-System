import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../NavBar/Navbar';

export default class StudentDetails extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          student:{}
        }
      }

      componentDidMount(){
 
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/student/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              student:res.data.student
            })
    
            console.log(this.state.student)
          }
        })
    
      }

  render() {

    const {name, age, address, gender, number } = this.state.student;

    return (
      <div>
        <NavBar/>
        <div style={{marginTop:"40px"}} className='container'>
          <h4>{name}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Age</dt>
        <dd className='col-sm-9'>{age}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Address</dt>
        <dd className='col-sm-9'>{address}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Gender</dt>
        <dd className='col-sm-9'>{gender}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Index Number</dt>
        <dd className='col-sm-9'>{number}</dd>
        
      </dl>
      </div>
      </div>
    )
  }
}
