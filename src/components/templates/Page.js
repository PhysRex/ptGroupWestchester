import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeaderImageBanner } from './';

/**
 * This component serves as a template for all Pages
 */
const Page = () => (
  <Container fluid>
    <HeaderImageBanner
      content='Page Template'
      subheader='This page serves as a template for all pages'
    />
  </Container>
);


export default Page;
