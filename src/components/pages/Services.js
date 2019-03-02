import React from 'react';
import { Container } from 'semantic-ui-react';

import {
  HeaderBanner,
  QuoteBanner,
} from '../templates';
import { ServicesAccordion } from './Services/';
import { servicesContent } from '../../copy';


const Forms = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerPrimary flex align-items-center justify-content-center"
      content='Our Services'
      subheader='We are proud to offer the highest quality personalized treatment to suit your needs.'
    />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='One-on-one therapy services are provided by experienced Physical Therapists, offered in private treatment rooms with state-of-the-art equipment.'
    />
    <ServicesAccordion services={servicesContent} />
  </Container>
);


export default Forms;
