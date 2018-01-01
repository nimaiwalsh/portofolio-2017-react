import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll'

export default class FixedMenu extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    const { activeItem } = this.state    
    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item style={{border: 'none'}}><div className='logo'>Nimai Walsh</div></Menu.Item>
            <Menu.Menu position='right' style={{border: 'none'}}>
            <Link activeClass="active" className="home" to="home" spy={true} smooth={true} duration={500} >
              <Menu.Item link>Home</Menu.Item>
            </Link>
            <Link activeClass="active" className="work" offset={-30} to="work" spy={true} smooth={true} duration={500} onSetActive={() => this.setState({activeItem: 'work'})} >
              <Menu.Item link active={activeItem === 'work'}>Work</Menu.Item>
            </Link>
            <Link activeClass="active" className="contact-me" offset={-30} to="contact-me" spy={true} smooth={true} duration={500} onSetActive={() => this.setState({activeItem: 'contact'})} >
              <Menu.Item link active={activeItem === 'contact'}>Contact</Menu.Item>
            </Link>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}