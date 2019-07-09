import _ from 'lodash';
import React from 'react';
import {
  Container,
  Grid,
  Tab,
  Header,
  Button,
  Popup,
} from 'semantic-ui-react';

const tabOptions = {
  fluid: true,
  vertical: true,
  tabular: false,
};

const tabPanes = (formsToDisplay) => formsToDisplay.map(({ name, downloadLink, description }) => {
  const formattedName = _.startCase(name);
  return {
    menuItem: formattedName,
    render: () => (
      <Grid>
        <Grid.Column textAlign='center' className="margin-top-20">
          <Header as='h2' content={formattedName} />
          <p>{description}</p>
          <Popup
            trigger={
              <a href={downloadLink} target='_blank' rel="noopener noreferrer" download>
                <Button
                  content={formattedName}
                  label={{
                    as: 'a',
                    basic: true,
                    icon: 'download',
                    color: 'gray'
                  }}
                  labelPosition='right'
                />
              </a>
            }
            content='Click to download!'
          />
        </Grid.Column>
      </Grid>
    )
  };
});

const TabbedForms = ({ formsToDisplay }) => (
  <Container className="margin-top-50 margin-bottom-50">
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign='center' computer={10} mobile={16}>
          <Tab
            grid={{ paneWidth: 10, tabWidth: 6 }}
            menu={tabOptions}
            panes={tabPanes(formsToDisplay)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default TabbedForms;
