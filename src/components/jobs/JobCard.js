import React from 'react'
import { Link } from 'react-router-dom'

const JobCard = ({company, title, location, company_logo, id }) => {
  return(

    <div className="column is-one-third-desktop is-full-mobile is-half-tablet">
      <Link to={`/jobs/${id}`}>
        <div className="card">
          <p className="title is-4">{title}</p>
          <div className="columns card-details">
            <div className="column is-half">
              {company_logo &&
                <div className="card-image">
                  <figure className="image">
                    <img src={company_logo} alt="Placeholder image" />
                  </figure>
                </div>
              }
              {!company_logo &&
                <div className="card-image">
                  <figure className="image">
                    <img src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-Logo.png" alt="Placeholder image" />
                  </figure>
                </div>
              }
            </div>
            <div className="column is-half">
              <p className="subtitle is-6">{company}</p>
              <p className="subtitle is-6">🌏 {location}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default JobCard

//
