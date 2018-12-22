import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeaderBanner } from '../templates';
import { BiographyBanner } from './Staff/';
import { profile2 } from '../../assets/images';

const bioContent = [
  {
    name: 'Mauricio Campuzano',
    degrees: 'PT, PhD, MBA, Astronaut',
    role: 'Chief Technology Office',
    description: 'With over 25 years’ experience in land and residential development, Chris is focused on the acquisition of new strategic land development opportunities. With a keen reputation for identifying strategic sites and his strong technical expertise, Chris works with his contacts and clients to ensure successful delivery of development projects to generate maximum revenue and value.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: profile2,
  },
  {
    name: 'Mauricio Campuzano',
    degrees: 'PT, PhD, MBA, Astronaut',
    role: 'Chief Technology Office',
    description: 'A long time ago I wanted to help people and make a difference in their lives. Now I just do it for the money. I would rather be sailing.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: profile2,
  },
  {
    name: 'Mauricio Campuzano',
    degrees: 'PT, PhD, MBA, Astronaut',
    role: 'Chief Technology Office',
    description: 'A long time ago I wanted to help people and make a difference in their lives. Now I just do it for the money. I would rather be sailing. With over 25 years’ experience in land and residential development, Chris is focused on the acquisition of new strategic land development opportunities. With a keen reputation for identifying strategic sites and his strong technical expertise, Chris works with his contacts and clients to ensure successful delivery of development projects to generate maximum revenue and value.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: profile2,
  },
  {
    name: 'Mauricio Campuzano',
    degrees: 'PT, PhD, MBA, Astronaut',
    role: 'Chief Technology Office',
    description: 'A long time ago I wanted to help people and make a difference in their lives. Now I just do it for the money. I would rather be sailing. With over 25 years’ experience in land and residential development, Chris is focused on the acquisition of new strategic land development opportunities. With a keen reputation for identifying strategic sites and his strong technical expertise, Chris works with his contacts and clients to ensure successful delivery of development projects to generate maximum revenue and value.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: profile2,
  },
  {
    name: 'Mauricio Campuzano',
    degrees: 'PT, PhD, MBA, Astronaut',
    role: 'Chief Technology Office',
    description: 'A long time ago I wanted to help people and make a difference in their lives. Now I just do it for the money. I would rather be sailing. With over 25 years’ experience in land and residential development, Chris is focused on the acquisition of new strategic land development opportunities. With a keen reputation for identifying strategic sites and his strong technical expertise, Chris works with his contacts and clients to ensure successful delivery of development projects to generate maximum revenue and value.',
    quote: 'My aim is to connect with every patient in a real and authentic way',
    image: profile2,
  },
]


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
