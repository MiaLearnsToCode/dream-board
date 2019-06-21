import React from 'react'
// This is a functional component which includes the code for the homepage.
// Here you can find the title of the project and a short description of what the website does.
// This component is one of the Routes inside of the app.js and is a first page the users see when they land on the project.

const Homepage = () => {
  return(
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-1">
            Dream Board
          </h1>
          <section></section>
          <h2 className="subtitle is-3">
            Find and apply to your dream job
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Homepage
