import React from 'react';
import {
  Container,
  Grid,
  Card,
  Header,
} from 'semantic-ui-react';

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
  <Grid className="bg-secondary">
    <Container className="margin-40">
      <Grid stackable>
        <Grid.Row className="">

          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Header as='h2' textAlign='center' className="f-text-white">
              Office Hours
              <Header.Subheader>
                Call us anytime 
              </Header.Subheader>
            </Header>
            <Grid padded='horizontally' className="f-margin-top-10">
            {
              hours.map(({day, open, close, isClosed}) => 
                <Grid.Row key={day} columns={2} className="f-padding-top-bottom-5 font-lgr">
                  <Grid.Column textAlign='right'>{day}</Grid.Column>
                  <Grid.Column textAlign='left'>{isClosed ? 'Closed' : `${open} - ${close}`}</Grid.Column>
                </Grid.Row>
              )
            }
            </Grid>
          </Grid.Column>

          <Grid.Column verticalAlign='middle' mobile={16} tablet={10} computer={10}>
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
  </Grid>
);


export default HoursAndDirections;
