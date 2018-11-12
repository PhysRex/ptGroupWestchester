import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeadBanner, ContentBanner, DividedBanner } from '../templates';


const Forms = () => (
  <Container fluid>
    <HeadBanner
      content='Forms'
      subheader='Lots of forms to download...'
    />
    <ContentBanner
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner />
  </Container>
);


export default Forms;
