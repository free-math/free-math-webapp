/**
 * Import Packages
 */
import _ from 'lodash'
import React from 'react'
import logger from "redux-logger"
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from "redux"

/**
 * Import Modules
 */
import App from './routing/App'
import Reducers from './reducers/Reducers'

// Needed for onTouchTap. Should go away soon
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/**
 * Setting up Reducers, Logger for Developtment, Store and middleware
 * =============================================================================
 */
const reducers = combineReducers(Reducers)

/**
 * Custom Logger, if needed
 */
const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action ", action)
  next(action)
}

const store = createStore(
  reducers,
  {},
  applyMiddleware(myLogger, logger)
)

store.subscribe(() => {
  // console.log('Store updated! ', store.getState())
})

/**
 * App Rendering
 */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('app')
)
