import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeaderBanner, QuoteBanner, DividedBanner } from '../templates';


const Staff = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerSecondary flex align-items-center justify-content-center"
      content='Staff'
      subheader='Meet our amazing team of caring and experienced professionals'
    />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner />
  </Container>
);


export default Staff;
