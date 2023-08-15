import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">ExComS</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">User Databases</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Ekahau Databases</a>
                            </li>
                            
                        </ul>
                        <form className="d-flex">
                        <NavLink to="/sign"> <button className=" me-2 btn btn-light" type ="submit">Register</button></NavLink>
                           <NavLink to="/"> <button className ="btn btn-light" type ="submit">Logout</button></NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
