import React from 'react'
import { NavLink } from 'react-router-dom'

function Welcome() {
    return (

        <div class="card text-center d-flex justify-content-center align-items-center vh-50" style={{marginTop: 150 }}>
            <img className="center" src="/logo.png" style={{ width: 200}} alt="profile" />
            <div class="card-body mt-3">
                <h5 class="card-title">Welcome to ExComS</h5>
                <p class="card-text">Express Communication Services Limited.</p>
                <NavLink to="/home" class="btn btn-danger"> Go to User Databases</NavLink>
            </div>
            
        </div>

    )
}

export default Welcome