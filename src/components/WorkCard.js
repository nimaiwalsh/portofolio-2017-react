import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const WorkCard = ({ title, description, image, built, github, githsrc }) => {
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
  )
}

export default WorkCard