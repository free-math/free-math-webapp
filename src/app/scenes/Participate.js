import React from "react"
import {connect} from "react-redux"

class Participate extends React.Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div>
        Participate Container
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => { // Subscribes, I guess
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Participate)
