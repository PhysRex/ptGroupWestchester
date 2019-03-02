import React from 'react';
import { 
  Grid,
  Header,
 } from 'semantic-ui-react'

const HeaderBanner = ({ className, content, subheader }) => (
  <Grid>
    <Grid.Column textAlign='center' className={className}>
      <Header size='huge' textAlign='center' className="">
        <h1 className="text-white margin-bottom-0 font-5rem font-family-cinzel line-height-4rem">{content}</h1>
        <Header.Subheader className="f-text-white font-family-mate" content={subheader} />
      </Header>
    </Grid.Column>
  </Grid>
);


export default HeaderBanner;
