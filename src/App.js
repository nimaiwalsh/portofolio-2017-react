import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Item
} from 'semantic-ui-react';
import FixedMenu from './components/FixedMenu';
import TopMenu from './components/TopMenu';
import TwitterFeed from './components/TwitterFeed';
import WebIcons from './components/WebIcons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  hideFixedMenu = () => this.setState({ visibleMenu: false });
  showFixedMenu = () => this.setState({ visibleMenu: true });

  render() {
    const { visibleMenu } = this.state;
    return (
      <div className="App">
        { visibleMenu ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            style={{ minHeight: '100vh' }}
            vertical
            inverted
            textAlign="center"
          >
            <TopMenu />
            <Container text>
              <Header
                as='h1'
                content='Nimai Walsh'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginTop: '2em' }}
              />
              <Header
                as='h2'
                content='Front End Web Developer'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
            </Container>
            <Container verticalAlign='bottom'>
              <Item>
                <WebIcons />
              </Item>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ minHeight: '1100px' }} vertical>
        </Segment>

      </div>
    );
  }
}

export default App;
