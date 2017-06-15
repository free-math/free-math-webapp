import React from "react"
import {connect} from "react-redux"

/**
 * Import containers and components
 */
import UploadForm from '../containers/uploadForm'

class Solve extends React.Component {

  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <UploadForm />
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


export default connect(mapStateToProps, mapDispatchToProps)(Solve)
