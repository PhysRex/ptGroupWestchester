import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeaderBanner } from '../templates';
import { BiographyBanner } from './Staff/';
import { bioContent } from '../../copy';



const Staff = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerPrimary flex align-items-center justify-content-center"
      content='Staff'
      subheader='Meet our amazing team of caring and experienced professionals'
    />
    <BiographyBanner
      content={bioContent}
    />
  </Container>
);


export default Staff;
