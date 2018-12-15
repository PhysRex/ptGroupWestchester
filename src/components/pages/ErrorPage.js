import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeaderBanner } from '../templates';

const ErrorPage = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerSecondary flex align-items-center justify-content-center"
      content='Error'
      subheader="Somehow we can't find what you're looking for ¯\_(ツ)_/¯"
    />
  </Container>
);

export default ErrorPage;