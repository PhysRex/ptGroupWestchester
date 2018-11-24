import React from 'react';
import { Container } from 'semantic-ui-react'
import {
  HeadBanner,
  ContentBanner,
  DividedBanner,
  DownloadLink,
} from '../templates';

import pdf from '../../assets/documents/N_P Packet.pdf'

const Forms = () => (
  <Container fluid>
    <HeadBanner
      className="banner-image-mountainsRiveside flex align-items-center justify-content-center"
      content='Forms'
      subheader='Lots of forms to download...'
    />
    <ContentBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DownloadLink contentToDownload={pdf} text="download this content..." />
    <DividedBanner />
  </Container>
);


export default Forms;
