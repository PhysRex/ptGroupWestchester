import React from 'react';
import {
  Responsive,
  Container,
  Grid,
} from 'semantic-ui-react'


const setColumns = 12;
const left = {
  mobile: 10,
  tablet: 7,
  computer: 5,
}
const right = {
  mobile: 10,
  tablet: 7,
  computer: 5,
}

export const GridTemplate = () => (
  <Container>
    <Grid stackable centered>
      <Grid.Row
        className="margin-bottom-10"
        // textAlign='left'
      >
        <Grid.Column className="blue-border" mobile={10} tablet={7} computer={5}>
          <Responsive {...Responsive.onlyMobile}>onlyMobile: 10</Responsive>
          <Responsive {...Responsive.onlyTablet}>onlyTablet: 7</Responsive>
          <Responsive {...Responsive.onlyComputer}>onlyComputer: 5</Responsive>
        </Grid.Column>
        <Grid.Column className="blue-border" mobile={9} tablet={8} computer={7}>
          <Responsive {...Responsive.onlyMobile}>onlyMobile: 9</Responsive>
          <Responsive {...Responsive.onlyTablet}>onlyTablet: 8</Responsive>
          <Responsive {...Responsive.onlyComputer}>onlyComputer: 7</Responsive>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="margin-bottom-10" columns={setColumns}>
      {
        [...Array(18)].map((value, index) => {
          console.log('index: ', index)
          return (
            <Grid.Column key={index} className="blue-border" width={1}>
              {index + 1}
            </Grid.Column>)
          }
        )
      }
      </Grid.Row>
    </Grid>
  </Container>
);


export default GridTemplate;
