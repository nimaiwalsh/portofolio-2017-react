import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

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
        <Card.Description>
          { description }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={github} target='_blank'>
          <Icon name='github' />
          View on github
        </a>
      </Card.Content>
    </Card>
  )
}

export default WorkCard