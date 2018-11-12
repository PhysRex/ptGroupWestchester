import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeadBanner, ContentBanner, DividedBanner } from '../templates';

const Home = (props) => (
  <Container fluid>
    <HeadBanner
      content='Home'
      subheader='A brief description of the game, possibly rules'
    />
    <ContentBanner
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner />
    <DividedBanner />
  </Container>
);


export default Home;
