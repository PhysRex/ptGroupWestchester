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
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='If you would like to speed up the process for your first appointment, you may download and complete the necessary documents. If you are unable to download these files, we ask that you arrive 15 minutes earlier than your scheduled time. Thank you!'
    />
    <TabbedForms formsToDisplay={listOfForms} />
  </Container>
);


export default Forms;
