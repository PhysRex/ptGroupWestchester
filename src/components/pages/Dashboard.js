import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeadBanner } from '../templates';

const Dashboard = () => (
  <Container>
    <HeadBanner
      content='Dashboard'
      subheader='Player stats here'
    />
  </Container>
);


export default Dashboard;
