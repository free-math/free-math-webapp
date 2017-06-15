import React from "react"
import {connect} from "react-redux"

class Donate extends React.Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div>
        Donate Container
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

export default connect(mapStateToProps, mapDispatchToProps)(Donate)
