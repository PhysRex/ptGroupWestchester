import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeadBanner, ContentBanner, DividedBanner } from '../templates';


const Staff = () => (
  <Container fluid>
    <HeadBanner
      content='Staff'
      subheader='staff description...'
    />
    <ContentBanner
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner />
  </Container>
);


export default Staff;
