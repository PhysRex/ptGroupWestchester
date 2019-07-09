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
  <Grid className="bg-primaryLight" centered>
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
              Visit Us
              <Header.Subheader>
                <div>{shared.business.hoursShort}</div>
              </Header.Subheader>
            </Header>
            <div> 
              <div>{shared.business.address.street}</div>
              <div>Suite {shared.business.address.suite}</div>
              <div>{shared.business.address.city}, {shared.business.address.state} {shared.business.address.zipCode}</div>
            </div>

          </Grid.Column>
         <Grid.Column mobile={16} tablet={8} computer={8}>

            <Header as='h2' textAlign='center' className="">
              Contact Us
              <Header.Subheader>
                Please give us a call anytime
              </Header.Subheader>
            </Header>
            {/* TODO: fix how this looks */}
            <div> 
              <div>Phone: <a className="link-white" href={`tel:+${shared.business.telephone}`}>{shared.business.telephone}</a></div>
              <div>Fax: {shared.business.fax}</div>
              <div>Email: <a className="link-white" href={`mailto:${shared.business.email}`}>{shared.business.email}</a></div>
            </div>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Grid>
);


export default Footer;
