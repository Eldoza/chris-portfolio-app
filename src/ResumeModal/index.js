import {Container, Image, Modal} from 'semantic-ui-react'
import React, {Component} from 'react'

import MyImage from '../images/Chris-Mendoza-Resume-copy.jpg'

class ResumeModal extends Component {

  render() {
    const {closeResumeModal} = this.props

    return (
      <Modal closeIcon="close" onClose={closeResumeModal} open={true}>
        <Modal.Content image>
          <Container style={{height:1300, width:875}}>
            <Image src={MyImage} size="huge"/>
          </Container>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ResumeModal
