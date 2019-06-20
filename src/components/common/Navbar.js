import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <Link to="/jobs" className="navbar-item">
            Find jobs
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
