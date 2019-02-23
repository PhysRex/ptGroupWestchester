import React from 'react';
import { Container } from 'semantic-ui-react'

import { HeaderImageBanner, QuoteBanner, DividedBanner } from '../templates';
import { HoursAndDirections } from './Home/';
import { bannerContent } from '../../copy';

const Home = () => (
  <Container fluid>
    <HeaderImageBanner
      className="banner-image-father-holding-child-beach flex align-items-center justify-content-center text-shadow-default"
      primaryContent='Physical Therapy Group'
      secondaryContent='of Westchester'
      subheader='We take pride in our ability to provide one-on-one exceptional care by the most qualified, experienced and licensed physical therapists throughout your entire course of treatment.'
    />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner content={bannerContent} />
    <HoursAndDirections />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='You will receive Innovative Physical Therapy services directed to the treatment and prevention of sports injuries, repetitive strain disorders and conditions involving bone, joint and soft tissue.'
    />
  </Container>
);


export default Home;
