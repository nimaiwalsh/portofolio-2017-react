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
  Visibility
} from 'semantic-ui-react';
import FixedMenu from './components/FixedMenu';
import TopMenu from './components/TopMenu';
import TwitterFeed from './components/TwitterFeed';
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
          >
            <TopMenu />
          </Segment>
        </Visibility>

        <Segment style={{ minHeight: '1100px' }} vertical>
          <TwitterFeed />
        </Segment>

      </div>
    );
  }
}

export default App;
