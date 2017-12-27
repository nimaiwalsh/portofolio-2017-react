import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const FixedMenu = () => {
  return (
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item style={{border: 'none'}}><div className='logo'>Nimai Walsh</div></Menu.Item>
          <Menu.Menu position='right' style={{border: 'none'}}>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Contact</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default FixedMenu;