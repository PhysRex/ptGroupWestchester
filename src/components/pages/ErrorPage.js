import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeadBanner } from '../templates';

const ErrorPage = () => (
  <Container fluid>
    <HeadBanner
      content='Error Page'
      subheader='A witty error message, hopefully'
    />
  </Container>
);

export default ErrorPage;