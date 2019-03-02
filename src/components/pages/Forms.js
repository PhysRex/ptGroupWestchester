import React from 'react';
import { Container } from 'semantic-ui-react';

import {
  HeaderBanner,
  QuoteBanner,
} from '../templates';
import { TabbedForms } from './Forms/';
import { listOfForms } from '../../copy';


const Forms = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerPrimary flex align-items-center justify-content-center"
      content='Forms'
      subheader='Review our resources below and download the right one for you'
    />
    <TabbedForms formsToDisplay={listOfForms} />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='We help you navigate the complicated health insurance environment and answer all your concerns prior to beginning treatment.'
    />
  </Container>
);


export default Forms;
