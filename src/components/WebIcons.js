import React from 'react';
import { Image, List } from 'semantic-ui-react';
import _ from 'lodash';

const icons = {
  css: require('../resources/img/css3-icon.svg'),
  html: require('../resources/img/html5-icon.svg'),
  javascript: require('../resources/img/javascript-icon.svg'),
  react: require('../resources/img/react-icon.svg'),
  webpack: require('../resources/img/webpack-icon.svg'),
  babel: require('../resources/img/babel-icon.svg'),
}

const renderIcons = () => {
  return _.map(icons, (value, key) => {
    return (
      <List.Item key={key}>
        <Image src={value} style={{height: '100px'}} />
        <List.Content style={{display: 'block'}}>
          <span style={{textTransform: 'uppercase'}}>{key}</span>
        </List.Content>
      </List.Item>
    )
  });
}

const WebIcons = () => {
  return <List horizontal inverted>{renderIcons()}</List>
}

export default WebIcons