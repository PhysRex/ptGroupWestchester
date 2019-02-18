import React from 'react';
import {
  Container,
  Grid,
  Card,
  Image,
  Header,
  Label
} from 'semantic-ui-react'

/**
 * A banner element to display a list of staff bios
 * @param {Object[]} props.content A list of staff bios to display
 * @returns {JSX} The rendered ReactJS component
 */
export const BiographyBanner = ({ content }) => (
  <Container className="margin-40">
    <Grid stackable centered>
      { content &&
        content.map(({ name, degrees, role, description, quote, image }) => 
          <Grid.Row key={name} className="margin-bottom-60">
            <Grid.Column verticalAlign='top' mobile={12} tablet={9} computer={7}>
              <Card fluid className="no-border f-box-shadow-pale-transition">
                <Image src={image} />
              </Card>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={7} computer={6}>
              <Header as='h2'>
                {name}
                <Label content={degrees} size='tiny' className=""/>
                <Header.Subheader>
                  {role} 
                </Header.Subheader>
              </Header>
              <p className='font-lg'>{description}</p>
              <p className='font-xl-less font-weight-800'>&quot;{quote}&quot;</p>
            </Grid.Column>
          </Grid.Row>
        )
      }
    </Grid>
  </Container>
);


export default BiographyBanner;
