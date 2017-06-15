import React from "react"
import {connect} from "react-redux"

class Learn extends React.Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div>
        Learn Container
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

export default connect(mapStateToProps, mapDispatchToProps)(Learn)
