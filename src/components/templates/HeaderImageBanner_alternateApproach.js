import React from 'react';
import { 
  Grid,
  Image,
} from 'semantic-ui-react';
import { fatherHoldingChildBeach } from '../../assets/images'

const styles = {
  container: {
    position: 'relative',
    padding: 30% 0,
    // width: '100%', /* for IE 6 */
  },
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100%',
    height: '600px',
  },
  content: {
    position: 'absolute',
    top: '200px',
    left: 0,
    width: '100%',
    height: '600px',
  }
};

const HeaderImageBanner = ({ className, primaryContent, secondaryContent, subheader }) => (
  <Grid style={styles.container}>
  {/* <Grid className={className}> */}
    <Image 
      responsive
      style={styles.image}
      src={fatherHoldingChildBeach}
    />
    <Grid.Row style={styles.content} >
      <Grid.Column computer={2} tablet={2} mobile={1} />
      <Grid.Column computer={7} tablet={10} mobile={15} centered textAlign='left'>
        <div>
          <h1 className="text-white font-5rem font-family-merriweather margin-bottom-0">{primaryContent}</h1>
          <h1 className="text-white font-4rem font-family-sofia margin-top-0">{secondaryContent}</h1>
          <p className="text-white font-lgst">{subheader}</p>
        </div>
      </Grid.Column>
      <Grid.Column computer={7} tablet={4} mobile={0} />
    </Grid.Row>
  </Grid>
);


export default HeaderImageBanner;
