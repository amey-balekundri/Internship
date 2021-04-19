import React from 'react';
import logo from '../styles/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/"><img src={logo} style={{height:"40px",width:"40px"}} alt=""/> Company Name</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto">
                    
                </div>
                <div className="navbar-nav">
                    <a className="nav-link active" href="/">Services</a>
                    <a className="nav-link active" href="/">Products</a>
                    <a className="nav-link active" href="/">About Us</a>
                    <a className="nav-link active" href="/">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;