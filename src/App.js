import {Button, Grid, Icon, Image} from 'semantic-ui-react'
import React, { Component } from 'react';

import PortfolioModal from './PortfolioModal'
import ResumeModal from './ResumeModal'
import {css} from 'aphrodite'
import styles from './styles'

const {Column, Row} = Grid

class App extends Component {
  state = {
  isResumeModalOpen: false,
  isPortfolioModalOpen: false,
  }

  closeResumeModal = () => {
    this.setState(() => ({
      isResumeModalOpen: false,
    }))
  }

  openResumeModal = () => {
    this.setState(() => ({
      isResumeModalOpen: true,
    }))
  }
  closePortfolioModal = () => {
    this.setState(() => ({
      isPortfolioModalOpen: false,
    }))
  }

  openPortfolioModal = () => {
    this.setState(() => ({
      isPortfolioModalOpen: true,
    }))
  }

  render() {
    const {isResumeModalOpen, isPortfolioModalOpen} = this.state

    return (
      <div>
        <Grid centered>
          <Column textAlign="center">
            <Row>
              <p className={css(styles.heroTitle)}>
                MENDOZA
              </p>
            </Row>

            <Row>
              <div className={css(styles.bigHeroContent)}>
                {/* TODO add href link to stridekick name */}
                <div className={css(styles.heroContent)}>

                  <p className={css(styles.heroText)}>
                    Hello! My name is Chris Mendoza and I am a Chicago based Web Developer and Software Engineer. If I am not working on an awesome new project for <a href="https://stridekick.com" className={css(styles.hrefLinks)}>Stridekick</a> , I'm working on a freelancing project for cool clients from all over the world. I have a diverse set of skills that range from HTML + CSS + Javascript, all the way to working with various frameworks including: React + Apollo, GraphQL + Node, and Ruby on Rails.   I have working back-end knowledge that includes: MySQL, MongoDB, Express, GraphQL, Elastic Search.
                  {/* </p>
                </div>

                <div className={css(styles.heroContent)}>
                  <p className={css(styles.heroText)}> */}
                    {/* I have a diverse set of skills that range from HTML + CSS + Javascript, all the way to working with various frameworks including: React + Apollo, GraphQL + Node, and Ruby on Rails. */}
                  </p>

                  {/* I have working back-end knowledge that includes: MySQL, MongoDB, Express, GraphQL, Elastic Search. */}

                 {/* TODO add href to Northwestern */}
               </div>
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
              </div>
            </Row>

            <div className={css(styles.footerItems)}>
              <Button basic onClick={this.openPortfolioModal} inverted color="teal">Portfolio</Button>
              <Button basic onClick={this.openResumeModal} inverted color="teal" >Resume</Button>
              <Button basic inverted color="teal">Contact</Button>
            </div>
          </Column>
        </Grid>

        {isResumeModalOpen &&
          <ResumeModal
            isResumeModalOpen={isResumeModalOpen}
            closeResumeModal={this.closeResumeModal}
          />
        }
        {isPortfolioModalOpen &&
          <PortfolioModal
            isPortfolioModalOpen={isPortfolioModalOpen}
            closePortfolioModal={this.closePortfolioModal}
          />
        }

      </div>
    );
  }
}

export default App;
