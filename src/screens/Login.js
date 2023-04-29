import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials");
    }
    if(json.success){
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem("authToken",json.authToken)
      navigate("/");
    }else {
      alert("Enter Valid Credentials")
    }
  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <div >
      <Navbar />
        <section className="vh-100 bg-dark" >
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ "border-radius": "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Login</p>

                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">


                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" name='email' value={credentials.email} onChange={onChange} />
                              <label className="form-label text-white" htmlfor="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                              <label className="form-label text-white" htmlfor="form3Example4c">Password</label>
                            </div>
                          </div>


                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="m-3 btn btn-primary btn-lg">Login</button>

                            <Link to="/creatuser" className='m-3 btn btn-primary btn-lg'>Register</Link>
                          </div>
                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid" alt="" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
