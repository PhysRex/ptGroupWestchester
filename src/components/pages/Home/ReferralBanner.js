import React from 'react';
import { 
  Container,
  Grid,
  Segment,
  Image,
 } from 'semantic-ui-react';

 import { hssLogo } from '../../../assets/images';

/**
 * Creates a banner with a logo and quote
 */
const ReferralBanner = () => (
  <Container>
    <Grid
      stackable
      padded
    >
      <Grid.Row
        centered
        // columns={3}
        className="margin-top-bottom-70"
      >
      <Grid.Column mobile={16} computer={6}>
        <Image
          src={hssLogo}
          as='a'
          size='medium'
          href='https://www.hss.edu/find-a-therapy-provider_pt-group-of-westchester.asp'
          target='_blank'
          alt='Participating Member - Physical Therapy Group of Westchester'
          title='Participating Member - Physical Therapy Group of Westchester'
        />
      </Grid.Column>
      <Grid.Column mobile={16} computer={10} className="flex align-items-center justify-content-center">
        <p className="">We are proud to be a participating member of the Hospital for Special Surgery - Rehabilitation Network.  We maintain a strong level of communication with all of our referring doctors by directly forwarding our reports and by keeping them updated on any progress or limitations patients may have.  We are always willing to have a conversation with your doctors to improve your care and experience at our office
        </p>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);


export default ReferralBanner;
