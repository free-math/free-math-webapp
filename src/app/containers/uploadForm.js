/**
 * Packages import
 */
import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import config from '../config/config.js'
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

  testDrop(file, data) {
    return new Promise((resolve, reject) => {
      if (data.preview.indexOf(',') != -1) {
        data.preview = data.preview.split(',')[1]
      }
      data = data.preview
      const options = {
        lang: 'eng',
        data
      }
      request.post(`${config.api.address}/ocr`).send(options).end((err, res) => {
        if (err) return reject(err)
        console.log(res.body.fileContent  )
        resolve(res.text)
      })
    })
  }

  render() {
    return(
      <div>
        <Hologram uploadFunction={this.testDrop.bind(this)} ></Hologram>
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
