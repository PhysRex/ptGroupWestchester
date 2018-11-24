import React from 'react';
import { 
  Grid,
  Header,
 } from 'semantic-ui-react'

const HeadBanner = ({ className, content, subheader }) => (
  <Grid>
    <Grid.Column textAlign='center' className={className}>
      <Header
        textAlign='center'
        size='huge'
      >
        <Header.Content className="text-white">{content}</Header.Content>
        <Header.Subheader className="f-text-white">{subheader}</Header.Subheader>
      </Header>
    </Grid.Column>
  </Grid>
);


export default HeadBanner;
