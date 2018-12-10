import React from 'react';
import { 
  Grid,
  Header,
 } from 'semantic-ui-react'

const HeaderBanner = ({ className, content, subheader }) => (
  <Grid>
    <Grid.Column textAlign='center' className={className}>
      <Header
        textAlign='center'
        size='huge'
      >
        <h1 className="text-white margin-bottom-0 font-5rem">{content}</h1>
        <Header.Subheader className="f-text-white">{subheader}</Header.Subheader>
      </Header>
    </Grid.Column>
  </Grid>
);


export default HeaderBanner;
