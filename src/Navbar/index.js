import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
import styles from '../styles'
import {css} from 'aphrodite'

const NavBar = () => {
  return (
    <Grid.Row className={css(styles.navBar)} textAlign="right">
      <Button inverted content="Home" />
      <Button inverted content="Portfolio" />
      <Button inverted content="Contact" />
    </Grid.Row>
  )
}

export default NavBar
