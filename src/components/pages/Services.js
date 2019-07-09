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
      subheader='We provide results-driven therapy for the following conditions and more.'
    />
    <QuoteBanner
      fontName='rouge'
      className="font-xl text-align-center margin-top-40 margin-bottom-20"
      content='If you do not see your diagnosis on the list below, please give us a call! We would love to know more about your needs and concerns.'
    />
    <ServicesAccordion services={servicesContent} />
  </Container>
);


export default Forms;
