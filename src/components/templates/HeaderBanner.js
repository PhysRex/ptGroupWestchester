import React from 'react';
import { 
  Grid,
  Header,
 } from 'semantic-ui-react'

const HeaderBanner = ({ className, content, subheader }) => (
  <Grid>
    <Grid.Column textAlign='center' className={className}>
      <Header size='huge' textAlign='center' className="">
        <h1 className="text-white font-6rem font-5rem-mobile font-family-cinzel text-shadow-default line-height-4rem">{content}</h1>
        <Header.Subheader>
        <h4 className="margin-top-50 font-lgst font-1rem-mobile f-text-white font-family-laila text-shadow-default">
          {subheader}
        </h4>
        </Header.Subheader>
      </Header>
    </Grid.Column>
  </Grid>
);


export default HeaderBanner;
