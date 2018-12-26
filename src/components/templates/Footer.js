import React from 'react';
import {
  Container,
  Grid,
  Header,
} from 'semantic-ui-react';

/**
 * A generalized footer component
 * @returns {JSX} The rendered ReactJS component
 */

export const Footer = () => (
  <Grid className="bg-primary" centered>
    <Container className="margin-20">
      <Grid stackable>
        <Grid.Row className="" columns="equal">
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' textAlign='center' className="">
              Footer component
              <Header.Subheader>
                Should include hours, logo info, etc...
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Grid>
);


export default Footer;
