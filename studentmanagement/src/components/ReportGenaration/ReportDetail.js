import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../NavBar/Navbar';

export default class ReportDetail extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          report:{}
        }
      }

      componentDidMount(){
 
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/report/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              report:res.data.report
            })
    
            console.log(this.state.report)
          }
        })
    
      }

  render() {

    const {title, date, type, description} = this.state.report;
    return (
      <div>
        <Navbar/>
        <div style={{marginTop:"40px"}} className='container'>
          <h4>{title}</h4>
          <hr/>
      <dl className='row'>
        <dt className='col-sm-3'>Report Date Range</dt>
        <dd className='col-sm-9'>{date}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Report Type</dt>
        <dd className='col-sm-9'>{type}</dd>
        <br></br><br></br>
        <dt className='col-sm-3'>Description</dt>
        <dd className='col-sm-9'>{description}</dd>
      </dl>
      </div>
      </div>
    )
  }
}
