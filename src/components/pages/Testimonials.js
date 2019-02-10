import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeaderBanner } from '../templates';
import { TestimonialsContainer } from './Testimonials/'
import { testimonialContent } from '../../copy';


const Testimonials = () => (
  <Container fluid>
    <HeaderBanner
      className="banner-background-bannerPrimary flex align-items-center justify-content-center"
      content='hi!!'
      subheader='We strive to make true and lasting relationships with every patient'
    />
    <TestimonialsContainer content={testimonialContent} />
  </Container>
);


export default Testimonials;
