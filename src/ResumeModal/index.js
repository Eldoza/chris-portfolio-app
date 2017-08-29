import {Image, Modal} from 'semantic-ui-react'
import React, {Component} from 'react'

class ResumeModal extends Component {

  render() {
    const {closeResumeModal} = this.props

    return (
      <Modal closeIcon="close" onClose={closeResumeModal} open={true}>
        <Modal.Content image>
           <Image src="images/Chris-Mendoza-Resume.pdf" size="huge"/>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ResumeModal
