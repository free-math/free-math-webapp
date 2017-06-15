import React from "react"
import {connect} from "react-redux"

class Develop extends React.Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div>
        Develop Container
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

export default connect(mapStateToProps, mapDispatchToProps)(Develop)
