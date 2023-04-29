import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../Modal';
import Cart from '../screens/Cart';
export default function Nevbar(props) {
    const [cartView, setCartView] = useState(false)
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }
    const loadCart = () => {
        setCartView(true)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">Beens Bar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto md-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-4" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link active fs-4" aria-current="page" to="/myorder">My Orders</Link>
                                </li>
                                : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>

                                <Link className="btn btn-outline-light btn-primary" to="/login">Login</Link>
                                <Link className="btn  btn-outline-light btn-primary mx-2" to="/creatuser">Signup</Link>

                            </div>
                            :
                            <div>
                                <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                                    
                                    Cart
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                                <div className="btn btn-outline-light text-danger btn-primary" onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
/* eslint-disable react/jsx-no-undef */
