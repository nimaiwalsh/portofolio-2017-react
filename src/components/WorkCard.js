import React, { Component } from 'react';
import { Card, Image, Icon, Button, Transition } from 'semantic-ui-react';
import Waypoint from 'react-waypoint';

export default class WorkCard extends Component {
  constructor(props) {
    super(props)
    this.state = {display: false}
  }

  render() {
    const { title, description, image, built, github, githsrc } = this.props
    return (
      <Waypoint 
        onEnter={() => this.setState({display: true})}
      >
      <div>
      <Transition visible={this.state.display} animation='scale' duration={500}>
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
          <a href={github} target='_blank'>
            <Button color={'blue'} icon labelPosition='left'>
              <Icon name='github' />
              View on Github
            </Button>
          </a>
          <a href={githsrc} target='_blank'>
            <Icon name='github' />
            View source code
          </a>
        </Card.Content>
      </Card>
      </Transition>
      </div>
      </Waypoint>
    )
  }
}
