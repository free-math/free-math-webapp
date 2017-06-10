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
import Home from './Home'
import User from './User'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Router>
          <Root >
            <Route exact path="/" component={Home}></Route>
            <Route path="/userList" component={Home}></Route>
          </Root>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
