import React from 'react';
import { 
  Grid,
  Header,
  Image,
 } from 'semantic-ui-react';

 import {
  practiceOutside,
  practiceAerialView,
  hengAndFamily,
} from '../../assets/images';

const DividedBanner = () => (
  <Grid
    columns={3}
    divided
    stackable
    className="margin-20"
  >
    <Grid.Row>
      <Grid.Column>
        <Image
          src={practiceOutside}
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          src={hengAndFamily}
        />
      </Grid.Column>
      <Grid.Column>
        <Image
        src={practiceAerialView}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


export default DividedBanner;
