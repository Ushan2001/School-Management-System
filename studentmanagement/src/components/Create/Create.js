import React from 'react'
import NavBar from '../NavBar/Navbar'

export default function Create() {
  return (
    <div>
        <NavBar/>
      <div className='container' style={{marginTop:"40px"}}>
          <div className="card">
             <div className="card-header">
                 Fee Management
              </div>
          <div className="card-body">
           <h5 className="card-title">Fee Data & Recordes</h5>
           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <a href={"/fee"} className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      <br></br>
      <br></br>

      <div className="card">
             <div className="card-header">
                 Event Management
              </div>
          <div className="card-body">
           <h5 className="card-title">Event Data & Recordes</h5>
           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <a href={"/event"} className="btn btn-primary">Go somewhere</a>
          </div>
      </div>

      <br></br>
      <br></br>

      <div className="card">
             <div className="card-header">
                 Report Genaration
              </div>
          <div className="card-body">
           <h5 className="card-title">Report Data & Recordes</h5>
           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <a href={"/report"} className="btn btn-primary">Go somewhere</a>
          </div>
      </div>

      <br></br>
      <br></br>

      <div className="card">
             <div className="card-header">
                 Examination Management
              </div>
          <div className="card-body">
           <h5 className="card-title">Exam Data & Recordes</h5>
           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <a href={"/exam"} className="btn btn-primary">Go somewhere</a>
          </div>
      </div>

      <br></br>
      <br></br>

      <div className="card">
             <div className="card-header">
                 Course Management
              </div>
          <div className="card-body">
           <h5 className="card-title">Course Data & Recordes</h5>
           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <a href={"/course"} className="btn btn-primary">Go somewhere</a>
          </div>
      </div>

      <br></br>
      <br></br>

      <div className="card">
             <div className="card-header">
                 Class Management
              </div>
          <div className="card-body">
           <h5 className="card-title">Class Data & Recordes</h5>
           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           <a href={"/class"} className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      </div>
    </div>
  )
}
