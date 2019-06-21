import React from 'react'
import axios from 'axios'
import JobCard from './JobCard'

// This is a class component which includes a title, a search bar and the cards with summaries of the jobs in the website
// In the componentDidMount function the data of the job is imported using axios as it is a third party API by github
// The handleChange function is invoked in the search bar and it listens to the user typing. The user input is saved inside of this.state.searchTerm.
// The filter jobs function produces a RegExp of the searched input and it returns a new array of filtered jobs whose data matches the input of the user (title, location and description).
// The array returned by the filter function is mapped inside the JSX so that only the cards that match the search term are returned to the user.
// The card template is stored in the JobCard component 

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
    return this.state.data.filter(item => regexp.test(item.title) || regexp.test(item.description) || regexp.test(item.location))
  }

  render() {
    return(
      <section className="container section">
        <h1 className="title is-1">Search our vacancies</h1>

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
        {!this.state.data[0] &&
          <img className="spinner" src="https://offerscouponsdeals.in/public/ocd_images/overlay-loader.gif" alt="Loading"/>
        }
        {this.state.data[0] &&
          <div>
            {this.filterJobs().length < 50 &&
              <p>Matches found: {this.filterJobs().length}</p>
            }
            <div className="columns is-mobile is-multiline">
              {this.filterJobs().map(card => (
                <JobCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        }
      </section>

    )
  }
}

export default JobsIndex
