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
  mobile: 9,
  tablet: 8,
  computer: 7,
}

export const GridTemplate = () => (
  <Container>
    <Grid stackable centered>
      <Grid.Row
        className="margin-bottom-10"
        // textAlign='left'
      >
        <Grid.Column className="blue-border" mobile={left.mobile} tablet={left.tablet} computer={left.computer}>
          <Responsive {...Responsive.onlyMobile}>onlyMobile: {left.mobile}</Responsive>
          <Responsive {...Responsive.onlyTablet}>onlyTablet: {left.tablet}</Responsive>
          <Responsive {...Responsive.onlyComputer}>onlyComputer: {left.computer}</Responsive>
        </Grid.Column>
        <Grid.Column className="blue-border" mobile={right.mobile} tablet={right.tablet} computer={right.computer}>
          <Responsive {...Responsive.onlyMobile}>onlyMobile: {right.mobile}</Responsive>
          <Responsive {...Responsive.onlyTablet}>onlyTablet: {right.tablet}</Responsive>
          <Responsive {...Responsive.onlyComputer}>onlyComputer: {right.computer}</Responsive>
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
