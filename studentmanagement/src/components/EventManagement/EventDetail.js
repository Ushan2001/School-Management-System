import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../NavBar/Navbar';

export default class EventDetail extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          event:{}
        }
      }

      componentDidMount(){
 
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/event/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              event:res.data.event
            })
    
            console.log(this.state.event)
          }
        })
    
      }
  render() {
    const {name, venue, date, amount, description,  } = this.state.event;
    return (
      <div>
        <Navbar/>
        <div style={{marginTop:"40px"}} className='container'>
          <h4>{name}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Event Venue</dt>
        <dd className='col-sm-9'>{venue}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Event Date</dt>
        <dd className='col-sm-9'>{date}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Amount</dt>
        <dd className='col-sm-9'>{amount}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Description</dt>
        <dd className='col-sm-9'>{description}</dd>
      </dl>
      </div>
      </div>
    )
  }
}
