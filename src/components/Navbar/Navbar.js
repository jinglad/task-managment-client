import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto text-uppercase">
                    <Link className="nav-item nav-link px-4 letter-spacing bg-primary text-white mr-3 rounded" to="/">Home</Link>
                    <Link className="nav-item nav-link px-4 letter-spacing bg-info text-white rounded" to="/dashboard">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;