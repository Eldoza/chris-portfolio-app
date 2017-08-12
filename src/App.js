import React, { Component } from 'react';
import {Button, Container, Grid, Image} from 'semantic-ui-react'
import NavBar from './Navbar'

import styles from './styles'
import {css} from 'aphrodite'

const {Column, Row} = Grid

class App extends Component {
  render() {
    return (
      <Grid>
        <Column>
          <Row>
            <p className={css(styles.heroTitle)}>
              MENDOZA.IO
            </p>
            {/* TODO add href link to stridekick name */}
            <p className={css(styles.heroContent)}>
              Hi my name is Chris Mendoza and I am a Chicago based Web Developer and Software Engineer. If I am not working on a cool new project for Stridekick, I'm working on a freelancing project for cool clients from all over the world.
            </p>

            <p className={css(styles.heroContent)}>
              I have a diverse set of skills that range from HTML + CSS + Javascript, all the way to working with various frameworks including: React + Apollo, GraphQL + Node, and Ruby on Rails.

              I have working back-end knowledge that includes: MySQL, MongoDB, Express, GraphQL, Elastic Search.

             {/* TODO add href to Northwestern */}
            </p>
          </Row>

          <Row textAlign="center">
            <Image src="https://robohash.org/chris" size="small" />
          </Row>
        </Column>
      </Grid>
    );
  }
}

export default App;
