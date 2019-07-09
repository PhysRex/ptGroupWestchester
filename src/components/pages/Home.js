import React from 'react';
import { Container } from 'semantic-ui-react';

import { HeaderImageBanner, QuoteBanner, DividedBanner } from '../templates';
import { HoursAndDirections, ReferralBanner } from './Home/';
import { bannerContent, headerContent } from '../../copy/home';

const Home = () => (
  <Container fluid>
    <HeaderImageBanner
      className="banner-image-father-holding-child-beach flex align-items-center justify-content-center text-shadow-default"
      primaryContent='Physical Therapy Group'
      secondaryContent='of Westchester'
      subheader={headerContent.description}
    />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner content={bannerContent} />
    <HoursAndDirections />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Your health and your care is our utmost priority.'
    />
    <ReferralBanner />
  </Container>
);


export default Home;
