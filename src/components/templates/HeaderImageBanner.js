import React from 'react';
import { 
  Grid,
  Header,
 } from 'semantic-ui-react'

const HeaderImageBanner = ({ className, content, subheader }) => (
  <Grid>
    <Grid.Column textAlign='center' className={className}>
      <Header
        textAlign='center'
        size='huge'
      >
        <h1 className="text-white font-6rem">{content}</h1>
        <Header.Subheader className="f-text-white">{subheader}</Header.Subheader>
      </Header>
    </Grid.Column>
  </Grid>
);


export default HeaderImageBanner;
