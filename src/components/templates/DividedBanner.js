import React from 'react';
import { 
  Grid,
  Header,
  Image,
 } from 'semantic-ui-react';

 import { TextContent } from './'


const DividedBanner = ({ content }) => (
  <Grid
    // columns={12}
    // columns={ content && (content.length || 1)}
    divided
    stackable
    padded
  >
    <Grid.Row
      centered
      columns={4}
      className="margin-bottom-10"
    >
      { content &&
        content.map(({ title, description, image }, index) => 
          <Grid.Column key={`${index}-${title}`}>
            <Image
              src={image}
              rounded
            />
            <Header
              textAlign='center'
              content={title}
            />
            <TextContent
              className="font-lg text-align-center"
              content={description}
            />
          </Grid.Column>
        )
      }
    </Grid.Row>
  </Grid>
);


export default DividedBanner;
