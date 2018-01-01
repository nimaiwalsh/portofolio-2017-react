import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll'

export default class FixedMenu extends Component {

  setActive() {
    console.log('active')
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
            <Link activeClass="active" className="work" offset={-30} to="Work" spy={true} smooth={true} duration={500} >
              <Menu.Item link>Work</Menu.Item>
            </Link>
            <Link activeClass="active" className="contact" offset={-30} to="Contact" spy={true} smooth={true} duration={500} onSetActive={this.setActive}>
              <Menu.Item link>Contact</Menu.Item>
            </Link>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}