import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';
import WorkCard from './WorkCard';

class WorkCardList extends Component {
  renderCards() {
   return _.map(this.props.project, (p, key) => {
    return (
      <Grid.Column key={key}>
        <WorkCard 
          title={p.title}
          description={p.description}
          image={p.image}
          built={p.builtwith}
          github={p.github}
          githsrc={p.githsrc}
        />
      </Grid.Column>
    )
   });
  }
  render() {
    return this.renderCards()
  }  
}

function mapStateToProps(state) {
  return { project: state.projectlist }
}

export default connect(mapStateToProps)(WorkCardList) 
