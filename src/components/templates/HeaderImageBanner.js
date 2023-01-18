import React from 'react';
import {
  Grid,
  Header,
  Button,
} from 'semantic-ui-react';

const HeaderImageBanner = ({
  className,
  primaryContent,
  secondaryContent,
  subheader,
  showAppointment,
}) => (
  <>
    <Grid className={className}>
      <Grid.Row >
        <Grid.Column computer={2} tablet={2} mobile={1} />
        <Grid.Column computer={7} tablet={10} mobile={15} textAlign='left'>
          <h1 className="text-white font-5rem font-4rem-mobile font-family-merriweather margin-bottom-0">{primaryContent}</h1>
          <h1 className="text-white font-4rem font-3rem-mobile  font-family-sofia margin-top-0">{secondaryContent}</h1>
          <p className="text-white font-lgst font-20px-mobile  margin-bottom-0">{subheader}</p>
          {showAppointment &&
            <div className="header-appointment">
              <Header as='h2' className="f-text-white header-container">
                Appointments
                <Header.Subheader className="f-text-white">
                  Click below to request an appointment online
                </Header.Subheader>
              </Header>
              <a href='https://forms.gle/oJCM7mUNUqnWLcJ68' target='_blank' rel="noopener noreferrer" className="button-container">
                <Button
                  content='Request Appointment'
                  icon='pencil'
                />
              </a>
            </div>
          }
        </Grid.Column>
        <Grid.Column computer={7} tablet={4} />

      </Grid.Row>
    </Grid>
  </>
);


export default HeaderImageBanner;
