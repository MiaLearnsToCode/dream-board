import React from 'react'
import axios from 'axios'
import JobCard from './JobCard'

class JobsIndex extends React.Component {
  constructor(){
    super()
    this.state = { data: [], searchTerm: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }


  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

  filterJobs() {
    const regexp = new RegExp(this.state.searchTerm, 'i')
    return this.state.data.filter(item => regexp.test(item.title))
  }

  render() {
    return(
      <section className="container section">
        <h1 className="title is-3">Browse jobs</h1>

        <div className="search">
          <form>
            <div className="field">
              <div className="control">
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Title, stack, city etc."
                  onChange={this.handleChange}
                  value={this.state.searchTerm}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="columns is-mobile is-multiline">
          {this.filterJobs().map(card => (
            <JobCard key={card.id} {...card} />
          ))}
        </div>
      </section>

    )
  }
}

export default JobsIndex
