import React from 'react';
import { 
  Grid,
  Header,
  Image,
 } from 'semantic-ui-react'

 import {
  practiceOutside,
  practiceAerialView,
  hengAndFamily,
} from '../../assets/images';

const ContentBanner = ({ content }) => (
  <Grid fluid columns={12} centered>
    <Grid.Column mobile={12} desktop={10}>
      <p className="font-xl text-align-center">
        {content}
      </p>
    </Grid.Column>
  </Grid>
);


export default ContentBanner;
