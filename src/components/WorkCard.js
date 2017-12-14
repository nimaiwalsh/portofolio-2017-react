import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const WorkCard = () => {
  return (
    <Card fluid>
      <Image src='' />
      <Card.Content>
        <Card.Header>
          Header
        </Card.Header>
        <Card.Meta>
          <span className="builtWith">
            Built with html, css, react
          </span>
        </Card.Meta>
        <Card.Description>
          Description of the card
        </Card.Description>
        <Card.Content extra>
          <a>
            <Icon name='gitHub' />
            View on GitHub
          </a>
        </Card.Content>
      </Card.Content>
    </Card>
  )
}

export default WorkCard