import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../NavBar/Navbar';

export default class FeeDetails extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          fee:{}
        }
      }

      componentDidMount(){
 
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/fee/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              fee:res.data.fee
            })
    
            console.log(this.state.fee)
          }
        })
    
      }


  render() {

    const {topic, reference, type, amount, date, note } = this.state.fee;
    return (
      <div>
        <NavBar/>
<div style={{marginTop:"40px"}} className='container'>
          <h4>{topic}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Reference</dt>
        <dd className='col-sm-9'>{reference}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Payment Type</dt>
        <dd className='col-sm-9'>{type}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Amount</dt>
        <dd className='col-sm-9'>{amount}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Date</dt>
        <dd className='col-sm-9'>{date}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Additional Note</dt>
        <dd className='col-sm-9'>{note}</dd>
        
      </dl>
      </div>
      </div>
    )
  }
}
