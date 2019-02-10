import React from 'react';
import { Container } from 'semantic-ui-react'
import {
  HeaderBanner,
  QuoteBanner,
  DividedBanner,
} from '../templates';
import DownloadableForms from './Forms/DownloadableForms'
import { listOfForms } from '../../copy';


const Forms = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerPrimary flex align-items-center justify-content-center"
      content='Forms'
      subheader='Lots of forms to download...'
    />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DownloadableForms formsToDisplay={listOfForms} />
    <DividedBanner />
  </Container>
);


export default Forms;
