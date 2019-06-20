import React from 'react'
import axios from 'axios'
import JobCard from './JobCard'

class JobsIndex extends React.Component {
  constructor(){
    super()
    this.state = {data: [] }
  }

  componentDidMount () {
    axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <section className="container section">
        <h1 className="title is-3">Browse jobs</h1>

        <div className="columns is-mobile">
          <div className="column is-one-fifth-desktop is-full-tablet is-full-mobile"></div>
          <div className="column has-text-centered">
            <form>
              <input type="search" />
              <input type="dropdown" />
              <input type="drowpdown" />
              <button className="button is-primary">Search</button>
            </form>
          </div>
          <div className="column is-one-fifth is-full-tablet is-full-mobile"></div>
        </div>

        <div className="columns is-mobile is-multiline">
          {this.state.data.map(card => (
            <JobCard key={card.id} {...card} />
          ))}
        </div>
      </section>

    )
  }
}

export default JobsIndex
