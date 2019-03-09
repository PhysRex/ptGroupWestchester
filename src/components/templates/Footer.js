import React from 'react';
import {
  Container,
  Grid,
  Header,
} from 'semantic-ui-react';

import { Logo } from './';
import {
  homePage,
} from '../../components/navigation/config';
import  { shared } from '../../copy';

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
          
            <Logo
              title={shared.site.title}
              subtitle={shared.site.subtitle}
              homePage={homePage}
              // handleClick={props.setNavHome}
              isHorizontal
            />

          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="margin-bottom-20" columns="equal">
         <Grid.Column mobile={16} tablet={8} computer={8}>

            <Header as='h2' textAlign='center' className="">
              Hours
              <Header.Subheader>
                <div>M, W 8AM-7PM</div>
                <div>T, Th, F 7AM - 7PM</div>
              </Header.Subheader>
            </Header>

          </Grid.Column>
         <Grid.Column mobile={16} tablet={8} computer={8}>

            <Header as='h2' textAlign='center' className="">
              Contact Us
              <Header.Subheader>
                <div>{shared.business.hoursShort[0]}</div>
                <div>{shared.business.hoursShort[1]}</div>
              </Header.Subheader>
            </Header>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Grid>
);


export default Footer;
