import React from "react"

import Header from '../components/Header'

const Root = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1">
        <Header />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1">
        {props.children}
      </div>
    </div>
  </div>
)

export default Root
