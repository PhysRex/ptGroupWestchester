import React from 'react';
import { Container } from 'semantic-ui-react'
import {
  HeaderBanner,
  QuoteBanner,
  DividedBanner,
  DownloadLink,
} from '../templates';
import DownloadableForms from './Forms/DownloadableForms'

import pdf from '../../assets/documents/N_P Packet.pdf'

const listOfForms = [
  {
    name: 'medical history',
    downloadLink: pdf,
    description: 'A form to provide your medical history'
  },
  {
    name: 'Personal Information',
    downloadLink: pdf,
    description: 'A form to provide your personal history'
  },
  {
    name: 'other stuff',
    downloadLink: pdf,
    description: 'A form to provide your other stuff'
  }
];

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
    <DownloadableForms 
      formsToDisplay={listOfForms}
    />
    <DownloadLink contentToDownload={pdf} text="download this content..." />
    <DividedBanner />
  </Container>
);


export default Forms;
