import React from 'react'

import { Link } from 'react-router-dom'

const Header = (props) => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to={"/userList"}>User List</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
