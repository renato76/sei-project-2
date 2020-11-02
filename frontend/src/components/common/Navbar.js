import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <img id="logo" src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg" alt="formula1" width="112" height="30" />
          </a>
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/drivers" className="navbar-item">Drivers</Link>
        </div>
        <div className="navbar-end">
          <Link to="/register" className="navbar-item">Register</Link>
          <Link to="/login" className="navbar-item">Login</Link>
          <Link to="/drivers/new" className="navbar-item">Add Driver</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
