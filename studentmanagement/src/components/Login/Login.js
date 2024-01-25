import React, { useState } from "react";
import "./login.css"
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = async () => {
      try {
          const response = await axios.post("http://localhost:8000/login", {
              username,
              password,
          });

          console.log(response.data);
          history.push("/home"); // Navigate to the home page
          window.location.reload(); // Reload the page
      } catch (err) {
          console.error("Error logging in:", err.message);
          alert("Error logging in Email or Password Incorrect:", err.message);
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await handleLogin(); // Call the login function
    } catch (err) {
        console.error("Error handling login:", err.message);
    }
};


  return (
    <div>
      <div className='container'>

<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                       Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Valid Email Address"
                        title="Username should only contain lowercase letters. e.g. john"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: "15px",paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                    <i className="far fa-check-square"></i>
                    &nbsp;Login
                </button>

                <div class="text-center text-lg-start mt-4 pt-2">
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/sign"
                class="link-danger">Register</a></p>
          </div>
                </form>
      </div>
    </div>
  </div>
  
</section>
        
      </div>
    </div>
  )
}
