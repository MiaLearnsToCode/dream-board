import React from 'react'
import axios from 'axios'
class JobDetails extends React.Component {
  constructor(){
    super()
    this.state = {data: [] }
  }

  componentDidMount () {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.id}.json`)
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props)
    return(
      <p>hi</p>
    )
  }
}

export default JobDetails

// <section className="container section">
//   <div className="columns is-mobile is-multiline" >
//     <div className="column is-one-third details">
//       {job.company_logo &&
//         <div className="card-image">
//           <figure className="image">
//             <img src={job.company_logo} alt="Placeholder image" />
//           </figure>
//         </div>
//       }
//       {!job.company_logo &&
//         <div className="card-image">
//           <figure className="image">
//             <img src="https://1000logos.net/wp-content/uploads/2018/08/GitHub-Logo.png" alt="Placeholder image" />
//           </figure>
//         </div>
//       }
//       {!job.company_url &&
//         <a href={job.company_url}>Check the company profile!</a>
//       }
//
//       <a>
//         <img className="image is-24x24" src="https://img.icons8.com/ultraviolet/40/000000/marker.png" />
//         {job.location}
//       </a>
//     </div>
//     <div className="column is-two-thirds">
//       <p className="title is-2">
//         <strong>{job.title}</strong>
//       </p>
//       <p className="title is-4">
//         <small>{job.company}</small>
//       </p>
//       <p className="has-text-justified">
//         {job.description}
//       </p>
//       <a className="button is-link is-rounded">Apply</a>
//     </div>
//   </div>
// </section>
