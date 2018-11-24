import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeadBanner, ContentBanner, DividedBanner } from '../templates';


const Staff = () => (
  <Container fluid>
    <HeadBanner
      className="banner-image-grayDryTrunk flex align-items-center justify-content-center"
      content='Staff'
      subheader='staff description...'
    />
    <ContentBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner />
  </Container>
);


export default Staff;
