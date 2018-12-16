import React from 'react';
import { Container, Grid, Card, Icon } from 'semantic-ui-react'

const shortenPhrase = (phrase, wordsToKeep = 3) => phrase.split(' ').splice(0,wordsToKeep).join(' ') + '...';

export const TestimonialsContainer = ({ content }) => (
  <Container
    className="margin-20"
  >
    <Grid
      stackable
      centered
    >
      <Grid.Row
        centered
        columns={3}
        // className="margin-20"
      >
        { content &&
          content.map(({ title, message, author, year, special }, index) => 
            <Grid.Column
              key={`${index}-${title}`}
              className="f-margin-bottom-30"
              // mobile={6} desktop={3}
              width={special && 6}
            >
              <Card
                fluid
                // raised
                className="no-border f-box-shadow-pale-transition"
              >
                <Card.Content textAlign='center'>
                  <Card.Header>{title || shortenPhrase(message, 3)}</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in {year}</span>
                  </Card.Meta>
                  <Card.Description>{message}</Card.Description>
                </Card.Content>
                <Card.Content extra textAlign='right'>
                  Comment by <Icon name='user' className="margin-left-10"/> {author}
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        }
      </Grid.Row>
    </Grid>
  </Container>
);


export default TestimonialsContainer;
