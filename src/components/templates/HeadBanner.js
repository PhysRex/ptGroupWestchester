import React from 'react';
import { 
  Grid,
  Header,
 } from 'semantic-ui-react'

const HeadBanner = ({ content, subheader }) => (
  <Grid>
    <Grid.Column textAlign='center' className="banner-image flex align-items-center justify-content-center">
      <Header
        textAlign='center'
        size='huge'
      >
        <Header.Content
          className="white"
        >
          {content}
        </Header.Content>
        <Header.Subheader
          className="f-white"
        >
          {subheader}
        </Header.Subheader>
      </Header>
    </Grid.Column>
  </Grid>
);


export default HeadBanner;
