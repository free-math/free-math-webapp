/**
 * Packages import
 */
import React from 'react'
import {connect} from 'react-redux'
import Hologram from 'hologram-image-upload'

/**
 * Package Style
 */
import 'hologram-image-upload/dist/css/Hologram.css'

class UploadForm extends React.Component {

  constructor() {
    super()
    this.state = {
      image: {}
    }
  }

  testDrop(accept, reject) {

    console.log(accept)
  }

  render() {
    return(
      <div>
        <Hologram uploader={(file) => this.testDrop(file)}></Hologram>
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm)
