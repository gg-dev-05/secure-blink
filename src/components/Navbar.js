import '../css/Navbar.css'

import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-item logo">Logo</div>
            <div className="navbar-item navbar-mid">About</div>
            <div className="navbar-item navbar-mid">Services</div>
            <div className="navbar-item navbar-mid">Case Studies</div>
            <div className="navbar-item navbar-mid">Testimonials</div>
            <div className="navbar-item navbar-mid">Contact</div>
            <div id="rectangle">
                <div className="navbar-item">Login</div>

            </div>
        </div>
    )
}
