import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll'

export default class FixedMenu extends Component {

  displayClass() {
    console.log()
  }

  render() {
    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item style={{border: 'none'}}><div className='logo'>Nimai Walsh</div></Menu.Item>
            <Menu.Menu position='right' style={{border: 'none'}}>
            <Link activeClass="active" className= "home" to="Home" spy={true} smooth={true} duration={500} >
              <Menu.Item link>Home</Menu.Item>
            </Link>
            <Link activeClass="active" className="work" to="Work" spy={true} smooth={true} duration={500} >
              <Menu.Item link>Work</Menu.Item>
            </Link>
            <Link activeClass="active" className="contact" to="Contact" spy={true} smooth={true} duration={500} >
              <Menu.Item link>Contact</Menu.Item>
            </Link>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}