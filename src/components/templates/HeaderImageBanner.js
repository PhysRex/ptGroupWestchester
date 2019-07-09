import React from 'react';
import { 
  Grid,
} from 'semantic-ui-react';

const HeaderImageBanner = ({
  className,
  primaryContent,
  secondaryContent,
  subheader
}) => (
  <Grid className={className}>
    <Grid.Row >
      <Grid.Column computer={2} tablet={2} mobile={1} />
      <Grid.Column computer={7} tablet={10} mobile={15} textAlign='left'>
        <div>
          <h1 className="text-white font-5rem font-4rem-mobile font-family-merriweather margin-bottom-0">{primaryContent}</h1>
          <h1 className="text-white font-4rem font-3rem-mobile  font-family-sofia margin-top-0">{secondaryContent}</h1>
          <p className="text-white font-lgst font-20px-mobile">{subheader}</p>
        </div>
      </Grid.Column>
      <Grid.Column computer={7} tablet={4}/>
    </Grid.Row>
  </Grid>
);


export default HeaderImageBanner;
