import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../NavBar/Navbar';

export default class ClassDetail extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          classM:{}
        }
      }

      componentDidMount(){
 
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/class/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              classM:res.data.classM
            })
    
            console.log(this.state.classM)
          }
        })
    
      }

  render() {

    const {name, sid, sname, teacher, note} = this.state.classM;

    return (
      <div>
        <Navbar/>
         <div style={{marginTop:"40px"}} className='container'>
          <h4>{name}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Subject Code</dt>
        <dd className='col-sm-9'>{sid}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Subject Name</dt>
        <dd className='col-sm-9'>{sname}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Teacher Name</dt>
        <dd className='col-sm-9'>{teacher}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Additinol Infromation</dt>
        <dd className='col-sm-9'>{note}</dd>
      </dl>
      </div>
      </div>
    )
  }
}
