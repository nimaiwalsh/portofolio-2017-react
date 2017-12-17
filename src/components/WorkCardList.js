import React from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';
import Projects from '../resources/projects.js';
import WorkCard from './WorkCard';

function renderCards() {
 return _.map(Projects, (p, key) => {
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

const WorkCardList = () => {
  return renderCards()
}

export default WorkCardList;