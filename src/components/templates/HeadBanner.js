import React from 'react';
import { 
  Grid,
  Header,
 } from 'semantic-ui-react'

const HeadBanner = ({ content, subheader }) => (
  <Grid columns={12} >
    <Grid.Row centered >
      <Grid.Column width={12} textAlign='center'>
        <Header
          textAlign='center'
          content={content}
          subheader={subheader}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


export default HeadBanner;
