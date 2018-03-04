import React, { Component } from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { css } from 'react-emotion';
import Waypoint from 'react-waypoint';

export default class WorkCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonDisplay: ''
    }
  }

  render() {
    const { title, description, image, built, github, githsrc } = this.props
    return (
      <Card fluid>
        <Image src={image} />
        <Card.Content>
          <Card.Header>
            { title }
          </Card.Header>
          <Card.Meta>
            <span className="builtWith">
              Built with: { built }
            </span>
          </Card.Meta>
          <Card.Description style={{minHeight: '4.2em'}}>
            { description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Waypoint onEnter={() => this.setState({buttonDisplay: 'display'})}>
            <div className={fade}>
              <a href={github} target='_blank'>
              <Button color={'blue'} icon labelPosition='left' fluid className={`hidden ${this.state.buttonDisplay}`}>
                <Icon name='github' />
                  View Project
              </Button>
              </a>
            </div>
          </Waypoint>
          <div style={{textAlign: 'center'}}>
            <a href={githsrc} target='_blank'>
              <Icon name='github' />
              View source code
            </a>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const fade = css({
  '& .hidden': {
    opacity: '0',
  },
  '& .hidden.display': {
    opacity: '1',
    transition: 'opacity 600ms ease-in',
  }
})

