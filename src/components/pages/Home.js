import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Button, Header } from 'semantic-ui-react';
import CaseStudies from '../shared/CaseStudies';

class Home extends Component {
    state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
          
        </Header>
        <Button primary>View</Button>
      </div>
    )

    return (
    <>
    <div class="video-header">
      <div class="video-content">
          <h1>Dani D Visuals</h1>
          <h3>creating visual experiences for all</h3>
      </div>
      <div class="video-overlay"></div>
      <div class="video-background">
          <Vimeo
            video="315734121"
            background='true'
            showTitle='false'
            showPortrait='false'
            showByline='false'
            controls='false'
            className="video-bg"
            autoplay='true'
            responsive='true'
            loop='true'
            />
      </div>
    </div>
    <CaseStudies />
    </>
    )
  }
}

export default Home;