import React from 'react';
import { 
  Grid,
 } from 'semantic-ui-react'

 import { TextContent } from './'

const QuoteBanner = ({ className, content }) => (
  <Grid
    columns={12}
    centered
  >
    <Grid.Column mobile={12} desktop={10}>
      <TextContent
        className={`font-family-oleo ${className}`}
        content={content}
      />
    </Grid.Column>
  </Grid>
);


export default QuoteBanner;
