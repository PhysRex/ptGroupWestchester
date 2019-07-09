import React from 'react';
import { 
  Grid,
 } from 'semantic-ui-react'

 import { TextContent } from './'

 const defaultFont = 'oleo';

const QuoteBanner = ({ className, content, fontName }) => (
  <Grid
    columns={12}
    centered
  >
    <Grid.Column mobile={12} desktop={10}>
      <TextContent
        className={`font-family-${fontName || defaultFont} ${className}`}
        content={content}
      />
    </Grid.Column>
  </Grid>
);


export default QuoteBanner;
