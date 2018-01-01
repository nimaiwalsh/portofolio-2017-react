import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Visibility,
  Item
} from 'semantic-ui-react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FixedMenu from './components/FixedMenu';
import TopMenu from './components/TopMenu';
import WebIcons from './components/WebIcons';
// import TwitterFeed from './components/TwitterFeed';
import WorkCardList from './components/WorkCardList';
import ContactForm from './components/ContactForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  hideFixedMenu = () => this.setState({ visibleMenu: false });
  showFixedMenu = () => this.setState({ visibleMenu: true });

  componentDidMount() {
    scrollSpy.update()
  }

  render() {
    const { visibleMenu } = this.state;
    const { segment, containerhead, header } = this.styles;
    return (
      <div className="App">
      <div className="element" id="containerElement" >
        { visibleMenu ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
          offset={[40, 40]}
        >
          <Element name="Home"/>
          <Segment
            style={{ minHeight: '700px' }}
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
            <Container style={{ marginTop: '10em' }}>
              <WebIcons />
            </Container>
          </Segment>
        </Visibility>
      
        <Segment vertical style={segment}>
          <Element name="Work" />
          <div style={containerhead}>
            <Container>
                <Header as='h1' content='Work' style={header}/>
            </Container>
          </div>
          <Container>
            <Grid doubling columns={3} stackable>
              <WorkCardList />
            </Grid>
          </Container>
        </Segment>

       
        <Segment vertical style={segment}>
          <Element name="Contact" />
          <div style={containerhead}>
            <Container>
                <Header as='h1' content='Contact me' style={header}/>
            </Container>
          </div>
          <Container>
            <Grid columns={2} stackable>
              <Grid.Column>
                <Segment color='blue'>
                    <p>Hi, I'm still working on the form submission. Please contact me at <a href="mailto:nimai.walsh@gmail.com">nimai.walsh@gmail.com</a></p>
                </Segment>
                <ContactForm />
              </Grid.Column>
              <Grid.Column style={{paddingTop: '36px'}}>

              </Grid.Column>
            </Grid>
          </Container>
        </Segment>

        <Segment inverted vertical style={{padding: '5em'}}>

        </Segment>
        
      </div>
      </div>
    );
  }

  styles = {
    segment: {
      paddingTop: '0',
      paddingBottom: '5em',
      backgroundColor: '#FDFDFD',
      minHeight: '700px'      
    },
    containerhead: {
      backgroundColor: '#FFFFFF',
      marginBottom: '5em',
      padding: '2em 0',
      boxShadow: '0 7px 10px 0 rgba(0,0,0,.04), 0 20px 20px 0 rgba(0,0,0,.02)',
    },
    header: {
      fontSize: '3.5em'
    }
  }

}

export default App;
