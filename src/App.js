import React, { Component } from 'react';
import {Grid, Image, Divider, Icon, Button, Modal} from 'semantic-ui-react'
import ResumeModal from './ResumeModal'
import PortfolioModal from './PortfolioModal'

import styles from './styles'
import {css} from 'aphrodite'

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
              {/* <div className={css(styles.dividerTitle)}>
                <Divider inverted={true}/>
              </div> */}
            <Row>
              <div className={css(styles.bigHeroContent)}>
                {/* TODO add href link to stridekick name */}
                <p className={css(styles.heroContent)}>
                  Hello! My name is Chris Mendoza and I am a Chicago based Web Developer and Software Engineer. If I am not working on an awesome new project for <a href="https://stridekick.com" className={css(styles.hrefLinks)}>Stridekick</a> , I'm working on a freelancing project for cool clients from all over the world.
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
              </div>
            </Row>

            <div className={css(styles.footerItems)}>
              <Button basic onClick={this.openPortfolioModal} className={css(styles.footButtons, styles.hover)}>Portfolio</Button>
              <Button basic onClick={this.openResumeModal} className={css(styles.footButtons, styles.hover)}>Resume</Button>
              <Button basic className={css(styles.footButtons, styles.hover)}>Contact</Button>
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
