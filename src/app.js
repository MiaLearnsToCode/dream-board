import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'

import Homepage from './components/common/Homepage'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import JobDetails from './components/jobs/JobDetails'
import JobsIndex from './components/jobs/JobsIndex'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/jobs/:id" component={JobDetails}/>
            <Route path="/jobs" component={JobsIndex}/>
            <Route exact path="/" component={Homepage}/>
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
