import React from 'react';
import {
  Container,
  Grid,
  Card,
  Header,
  Responsive,
} from 'semantic-ui-react';

import { convertObjToUrlParams } from '../../../utilities/utilities';

const hours = [
  {
    day: 'Monday',
    open: '8AM',
    close: '7PM',
  },
  {
    day: 'Tuesday',
    open: '7AM',
    close: '7PM',
  },
  {
    day: 'Wednesday',
    open: '8AM',
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

// TODO: update to use exact coords for business?
const mapsUrl = {
  route: 'https://maps.google.com/maps',
  params: {
    q: 'physical therapy group of westchester',
    t: '', // kind of map, e.g. m, k, h, p (normal, satellite, hybrid, terrain)
    z: 15, // zoom
    ie: 'UTF8', // encoding?
    iwloc: '',
    output: 'embed',
  } 
}

const srcForMaps = `${mapsUrl.route}?${convertObjToUrlParams(mapsUrl.params)}`;

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
            <Grid padded='horizontally' className="f-margin-top-bottom-30">
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
            <Header as='h2' textAlign='center' className="f-text-white">
              Location
              <Header.Subheader>
                Minutes from major highways and public transit
              </Header.Subheader>
            </Header>

            {/*FIXME: recalculate height with every change in width... */}
            <Card fluid className="no-border f-box-shadow-pale-transition">
              <iframe
                title="Physical Therapy Group of Westchester Map"
                src={srcForMaps}
                // height={'400'}
                height={window.innerWidth < Responsive.onlyTablet.minWidth ? '400' : '250'}
                scrolling='no'
                frameBorder='0'
                marginHeight='0'
                marginWidth='0'
              />
            </Card>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Container>
  </Grid>
);


export default HoursAndDirections;
