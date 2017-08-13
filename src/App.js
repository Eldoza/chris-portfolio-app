import React, { Component } from 'react';
import {Grid, Image, Divider, Icon, Button} from 'semantic-ui-react'

import styles from './styles'
import {css} from 'aphrodite'

const {Column, Row} = Grid

class App extends Component {
  render() {
    return (
      <Grid>
        <Column>
          <Row textAlign="center">
            <p className={css(styles.heroTitle)}>
              MENDOZA
            </p>
            <div className={css(styles.dividerTitle)}>
              <Divider inverted={true}/>
            </div>
            {/* TODO add href link to stridekick name */}
            <p className={css(styles.heroContent)}>
              Hello! My name is Chris Mendoza and I am a Chicago based Web Developer and Software Engineer. If I am not working on an awesome new project for <a href="https://stridekick.com" className={css(styles.hrefLinks)}>Stridekick</a>, I'm working on a freelancing project for cool clients from all over the world.
            </p>

            <p className={css(styles.heroContent)}>
              I have a diverse set of skills that range from HTML + CSS + Javascript, all the way to working with various frameworks including: React + Apollo, GraphQL + Node, and Ruby on Rails.

              I have working back-end knowledge that includes: MySQL, MongoDB, Express, GraphQL, Elastic Search.

             {/* TODO add href to Northwestern */}
            </p>
            <div className={css(styles.heroImage)}>
              <Image
               src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAsdAAAAJDVlMDMyMzE1LTY5MDctNGU1NS05OTEzLTRiNzAwMjAxMTU2NA.jpg"
               avatar
               size="small"
              />
            </div>
            <div className={css(styles.logos)}>
              <a href={"https://www.linkedin.com/in/chris-mendoza-02384784/"} className={css(styles.hrefLinks)}>
                <Icon link={true} name="linkedin square" size="big" />
              </a>
              <a href={"https://twitter.com/Da_dozer"}>
                <Icon name="twitter" size="big" />
              </a>
            </div>
          </Row>

          <Row>
            <Divider inverted={true}/>
          </Row>

          <div className={css(styles.footerItems)}>
            <Button basic inverted color="blue">Home</Button>
            <Button basic inverted color="blue">Portfolio</Button>
            <Button basic inverted color="blue">Resume</Button>
            <Button basic inverted color="blue">Contact</Button>
          </div>
        </Column>
      </Grid>
    );
  }
}

export default App;
