import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeaderBanner } from '../templates';
import { BiographyBanner } from './Team/';
import { bioContent } from '../../copy';


const Team = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerPrimary flex align-items-center justify-content-center"
      content='Team'
      subheader='Meet our amazing team of caring and experienced professionals'
    />
    <BiographyBanner
      content={bioContent}
    />
  </Container>
);


export default Team;
