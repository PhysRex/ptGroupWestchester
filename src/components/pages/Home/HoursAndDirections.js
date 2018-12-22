import React from 'react';
import {
  Container,
  Grid,
  Card,
  Divider,
  Header,
  Label
} from 'semantic-ui-react'

const hours = [
  {
    day: 'Monday',
    open: '7AM',
    close: '7PM',
  },
  {
    day: 'Tuesday',
    open: '7AM',
    close: '7PM',
  },
  {
    day: 'Wednesday',
    open: '7AM',
    close: '7PM',
  },
  {
    day: 'Thursday',
    open: '7AM',
    close: '7PM',
  },
  {
    day: 'Friday',
    open: '7AM',
    close: '7PM',
  },
  {
    day: 'Saturday',
    isClosed: true,
  },
  {
    day: 'Sunday',
    isClosed: true,
  },
];

/**
 * A banner element to display a list of staff bios
 * @param {Object[]} props.content A list of staff bios to display
 * @returns {JSX} The rendered ReactJS component
 */
export const HoursAndDirections = () => (
  <Container className="margin-40 bg-secondary" fluid>
    <Container>
      <Grid
        stackable
      >
        <Grid.Row className="margin-bottom-40" columns={2}>
          <Grid.Column
            // mobile={12} tablet={7} computer={6}
            >
            <Header as='h2' textAlign='center' className="f-text-white">
              Office Hours
              <Header.Subheader>
                Call us anytime 
              </Header.Subheader>
            </Header>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'
            // mobile={12} tablet={9} computer={7}
            >
            <Header as='h2' textAlign='center'>
              Location
              <Header.Subheader>
                Convenient located minutes from mayor highways and public transit
              </Header.Subheader>
            </Header>
            <Card fluid className="no-border f-box-shadow-pale-transition">
              Directions
            </Card>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Container>
  </Container>
);


export default HoursAndDirections;
