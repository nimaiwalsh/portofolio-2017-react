import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll'

function handleOnset() {
  console.log('test')
}

function handleOnset2() {
  console.log('test2')
}

function handleOnset3() {
  console.log('test3')
}
const TopMenu = () => {
  return (
    <Container>
      <Menu inverted pointing secondary size='large'>
        <Menu.Item><div className='logo'>Nimai Walsh</div></Menu.Item>
        <Menu.Menu position='right'>
          <Link activeClass="active" className="home" to="home" spy={false} smooth={true} duration={500} >
            <Menu.Item link>Home</Menu.Item>
          </Link>
          <Link activeClass="active" className="work" offset={-30} to="work" spy={false} smooth={true} duration={500} >
            <Menu.Item link>Work</Menu.Item>
          </Link>
          <Link activeClass="active" className="contact-me" offset={-30} to="contact-me" spy={false} smooth={true} duration={500} >
            <Menu.Item link>Contact</Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </Container> 
  )
}

export default TopMenu;