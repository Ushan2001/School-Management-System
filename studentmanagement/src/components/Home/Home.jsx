import React from 'react'


export default function Home() {

      
  return (
    <div>
      <div>
        <html>
        <body className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
         
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <a className="navbar-brand" href="/"><span className="fw-bolder text-primary">Home</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><a className="nav-link" href="/student">Student</a></li>
                            <li className="nav-item"><a className="nav-link" href="/teacher">Teacher</a></li>
                            <li className="nav-item"><a className="nav-link" href="/create"> Add Record</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">logout</a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
          
            <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                           
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Design &middot; Development &middot; Marketing</div></div>
                                <div className="fs-3 fw-light text-muted">I can help Manage To your System</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online and grow fast</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="/student">Student</a>
                                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="/teacher">Teacher</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                   
                                    <img className="profile-img" src="/images/profile.png" alt="..." />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
           
            <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                                <p className="lead fw-light mb-4">My Name is SMS I help brands grow.</p>
                                <p className="text-muted">I am SMS, dedicated to empowering educational institutions through innovative school management solutions. With a passion for fostering growth, I specialize in crafting seamless systems that streamline administrative tasks, enhance communication, and elevate overall efficiency. My commitment lies in supporting schools on their journey to success, providing tailored solutions that make a lasting impact on the educational experience. Let's build a foundation for growth and excellence together.</p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                    <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                    <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
                    <div className="col-auto">
                        <a className="small" href="#!">Privacy</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="#!">Terms</a>
                        <span className="mx-1">&middot;</span>
                        <a className="small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
       
        <script src="js/scripts.js"></script>
    </body>
        </html>
        
      </div>
    </div>
  )
  }
