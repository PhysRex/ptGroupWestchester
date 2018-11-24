import React from 'react';
import { 
  Grid,
  Header,
  Image,
 } from 'semantic-ui-react'

 import { TextContent } from './'

const ContentBanner = ({ className, content }) => (
  <Grid
    columns={12}
    centered
  >
    <Grid.Column mobile={12} desktop={10}>
      <TextContent
        className={className}
        content={content}
      />
    </Grid.Column>
  </Grid>
);


export default ContentBanner;
