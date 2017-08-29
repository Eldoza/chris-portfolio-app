import React, {Component} from 'react'

import {Modal} from 'semantic-ui-react'

class PortfolioModal extends Component {

  render() {
    const {closePortfolioModal} = this.props

    return (
      <Modal closeIcon="close" onClose={closePortfolioModal} open={true}>
        <Modal.Content>
           <div>Portfolio goes here </div>
        </Modal.Content>
      </Modal>
    )
  }
}

export default PortfolioModal
