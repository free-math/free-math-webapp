import React from 'react'

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

/**
 * Root component to create navigation
 */
import Root from './Root'

/**
 * Imports for Main container for each page, that will go into the Root
 * component as component prop to the Route componet.
 *
 * @example
 * import Home from './Home'
 *  class App extends React.Component {
 *    render () {
 *      return (
 *        <Router>
 *          <Root >
 *            <Route exact path="/" component={Home}></Route>
 *            <Route path="/userList" component={Home}></Route>
 *          </Root>
 *        </Router>)
 *    }
 *  }
 */

/**
 * Importing main scenes for routing
 */
import Solve       from '../scenes/Solve'
import Develop     from '../scenes/Develop'
import Donate      from '../scenes/Donate'
import Learn       from '../scenes/Learn'
import Participate from '../scenes/Participate'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Router>
          <Root >
            <Route exact path="/" component={Solve}></Route>
            <Route path="/solve" component={Solve}></Route>
            <Route path="/develop" component={Develop}></Route>
            <Route path="/donate" component={Donate}></Route>
            <Route path="/learn" component={Learn}></Route>
            <Route path="/participate" component={Participate}></Route>
          </Root>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
