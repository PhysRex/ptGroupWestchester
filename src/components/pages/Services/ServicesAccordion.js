import React from 'react';
import {
  Container,
  Grid,
  Accordion,
  Message,
  Icon,
} from 'semantic-ui-react';


const servicesPanels = (content) =>
  content.map(({name, description, source}) => ({
    key: name,
    title: {
      content: <span className="font-lgst">{name}</span>,
    },
    content: {
      content: (
        <div>
          <Message
            attached
            info
            color='blue'
            header={'Description'}
            content={description}
          />
          <Message attached='bottom' info color='teal'>
            <Icon name='help' />
            Have more questions? <a target="_blank" rel="noopener noreferrer" href={source}>Click here</a>!
          </Message>
        </div>
      ),
    },
}));


/**
 * An accordion component to display a list of services
 * @param {Object[]} props.content A list of services to display
 * @returns {JSX} The rendered ReactJS component
 */
export const ServicesAccordion = ({services}) => (
  <Container className="margin-40">
    <Grid>
      <Grid.Row centered className="">
        <Grid.Column mobile={16} computer={12} className="">
          <Accordion
            styled
            fluid
            // defaultActiveIndex={0}
            panels={servicesPanels(services)}
            className="text-left"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);


export default ServicesAccordion;
