import React from 'react';
import { Container } from 'semantic-ui-react';

import { HeaderImageBanner, QuoteBanner, DividedBanner } from '../templates';
import { HoursAndDirections, ReferralBanner } from './Home/';
import { bannerContent, headerContent } from '../../copy/home';

const Home = () => (
  <Container fluid>
    <HeaderImageBanner
      className="banner-image-father-holding-child-beach flex align-items-center justify-content-center text-shadow-default"
      primaryContent='Physical Therapy Group'
      secondaryContent='of Westchester'
      subheader={headerContent.description}
      showAppointment={true}
    />
    <QuoteBanner
      className="font-xl text-align-center margin-top-bottom-70"
      content='Our goal is to improve and maintain your overall health and to empower you with an understanding of your condition and wellness plan.'
    />
    <DividedBanner content={bannerContent} />
    <HoursAndDirections />
    <HeaderImageBanner
      className="banner-image-person-with-laptop flex align-items-center justify-content-center text-shadow-medium"
      subheader='We participate with many insurance plans from a variety of insurance companies. We always check your physical therapy benefits, prior to your visit, and we would be happy to discuss them with you throughout your care. If you have any questions about whether we take your insurance, please give us a call or send us an email, and we will get back to you with all the necessary information as soon as possible.'
    />
    <ReferralBanner
      className="font-lgr text-align-center margin-top-bottom-70"
      content='We are proud to be a participating member of the Hospital for Special Surgery - Rehabilitation Network.  We maintain a strong level of communication with all of our referring doctors by directly forwarding our reports and by keeping them updated on any progress or limitations patients may have.  We are always willing to have a conversation with your doctors to improve your care and experience at our office'
    />
  </Container>
);


export default Home;
