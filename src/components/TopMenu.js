import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const TopMenu = () => {
  return (
    <Container>
      <Menu inverted pointing secondary size='large'>
        <Menu.Item><div className='logo'>Nimai Walsh</div></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Resume</Menu.Item>
          <Menu.Item as='a'>Contact</Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container> 
  )
}

export default TopMenu;