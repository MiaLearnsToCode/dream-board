import React from 'react'

//  This is a functional component which contains the webpage footer.
//  This component contains the link to the authors of the project.
// The footer is exported to the app.js component which is the parent of the whole project.
// As a result the footer is visable in every component.

const Footer = () => {
  return(
    <footer className="footer is-paddingless">
      <p>
        <strong>DreamJob</strong> by <a href="https://github.com/MiaLearnsToCode"> Mia </a> & <a href="https://github.com/leealex88"> Ola </a>
      </p>
    </footer>
  )
}

export default Footer
