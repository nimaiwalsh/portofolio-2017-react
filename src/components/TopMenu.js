import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll';

const TopMenu = () => {
  const logo = require('../resources/img/nimaiwalsh-logo-dark.svg');
  return (
    <Container>
      <Menu inverted pointing secondary size="huge">
        <Menu.Item>
          <img src={logo} alt='Nimai Walsh Logo' />
        </Menu.Item>
        <Menu.Menu position="right">
          <Link
            activeClass="active"
            className="home"
            to="home"
            spy={false}
            smooth={true}
            duration={500}
          >
            <Menu.Item link active>Home</Menu.Item>
          </Link>
          <Link
            activeClass="active"
            className="work"
            offset={-30}
            to="work"
            spy={false}
            smooth={true}
            duration={500}
          >
            <Menu.Item link>Work</Menu.Item>
          </Link>
          <Link
            activeClass="active"
            className="contact-me"
            offset={-30}
            to="contact-me"
            spy={false}
            smooth={true}
            duration={500}
          >
            <Menu.Item link>Contact</Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default TopMenu;
