import React from 'react';
import { 
  Container,
  Grid,
  Header,
  Image,
 } from 'semantic-ui-react';

 import { TextContent } from './';

/**
 * Creates a mason-style image and text tiles
 * @param {object} props The options to create the tiles
 * @param {object} props.content Must have at least title, description and image details
 * -> image should be an imported image in the component in which it's called
 */
const DividedBanner = ({ content }) => (
  <Container>
    <Grid
      stackable
      padded
    >
      <Grid.Row
        centered
        columns={3}
        className="margin-bottom-10"
      >
        { content &&
          content.map(({ title, description, image }, index) => 
            <Grid.Column
              key={`${index}-${title}`}
              className="f-margin-bottom-30"
            >
              <Image
                className=""
                src={image}
                rounded
                fluid
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
  </Container>
);


export default DividedBanner;
