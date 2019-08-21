import React from 'react';
import {
  Container,
  Grid,
  Image,
 } from 'semantic-ui-react';
 import { TextContent } from '../../templates/'

 import { hssLogo } from '../../../assets/images';


 const defaultFont = 'alegreya';
/**
 * Creates a banner with a logo and quote
 */
const ReferralBanner = ({ className, content, fontName }) => (
  <Container>
    <Grid
      stackable
      padded
      className={className}
    >
      <Grid.Row
        centered
        className="margin-top-bottom-70"
      >
        <Grid.Column mobile={16} computer={6} verticalAlign='middle'>
          <Image
            src={hssLogo}
            className="margin-top-bottom-70 referral-banner--image"
            as='a'
            size='medium'
            href='https://www.hss.edu/find-a-therapy-provider_pt-group-of-westchester.asp'
            target='_blank'
            alt='Participating Member - Physical Therapy Group of Westchester'
            title='Participating Member - Physical Therapy Group of Westchester'
          />
        </Grid.Column>
        <Grid.Column mobile={16} computer={10} className="flex align-items-center justify-content-center">
          <TextContent
            className={`font-family-${fontName || defaultFont} ${className}`}
            content={content}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);


export default ReferralBanner;
