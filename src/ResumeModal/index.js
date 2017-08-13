import React, {Component} from 'react'
import {Modal} from 'semantic-ui-react'


class ResumeModal extends Component {

  render() {
    const {closeResumeModal} = this.props

    return (
      <Modal closeIcon="close" onClose={closeResumeModal} open={true}>
        <Modal.Content>
           <div>Resume goes here</div>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ResumeModal
