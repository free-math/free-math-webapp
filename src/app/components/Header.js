import React from 'react'

import { Link } from 'react-router-dom'

const Header = (props) => (
  <div>
    <nav className="navbar fixed-top navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to={"/solve"}       >Solve</Link></li>
            <li><Link to={"/learn"}       >Learn</Link></li>
            <li><Link to={"/develop"}     >Develop</Link></li>
            <li><Link to={"/participate"} >Participate</Link></li>
            <li><Link to={"/donate"}      >Donate</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
