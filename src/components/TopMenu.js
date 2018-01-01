import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll'

const TopMenu = () => {
  return (
    <Container>
      <Menu inverted pointing secondary size='large'>
        <Menu.Item><div className='logo'>Nimai Walsh</div></Menu.Item>
        <Menu.Menu position='right'>
          <Link activeClass="active" className="home" to="Home" spy={true} smooth={true} duration={500} >
            <Menu.Item link>Home</Menu.Item>
          </Link>
          <Link activeClass="active" className="work" to="Work" spy={true} smooth={true} duration={500} >
            <Menu.Item link>Work</Menu.Item>
          </Link>
          <Link activeClass="active" className="contact" to="Contact" spy={true} smooth={true} duration={500} >
            <Menu.Item link>Contact</Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </Container> 
  )
}

export default TopMenu;