import React from 'react'
import { Link } from 'react-router-dom'
// This is a functional component which includes the links to Homepage component and the JobsIndex component.
// The Navbar is exported to the app.js component which is the parent of the whole project.
// As a result the Navbar is visable in every component.

const Navbar = () => {
  return(
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">

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
