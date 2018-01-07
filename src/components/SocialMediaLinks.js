import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import _ from 'lodash';

const icons = {
  github: {
    name: 'github', 
    url: 'https://github.com/nimaiwalsh'
  },
  twitter: {
    name: 'twitter',
    url: 'https://twitter.com/nimaiwalsh',
  },
  freecodecamp: {
    name: 'free code camp', 
    url: 'https://www.freecodecamp.org/nimaiwalsh'
  },
}

const renderIcons = () => {
  return (
    _.map(icons, (icon) => {
      return (
        <a href={icon.url} target='_blank'><Icon name={icon.name} size='huge' /></a>
      )
    })
  )
}

const SocialMediaLinks = () => {
  return (
    <List>
      <List.Item>
        {renderIcons()}
      </List.Item>
    </List>
  )
}

export default SocialMediaLinks