import React from 'react';
import { Container } from 'semantic-ui-react'
import { HeadBanner, Login } from '../templates';

const Home = (props) => (
  <Container>
    <HeadBanner
      content='Home'
      subheader='A brief description of the game, possibly rules'
    />
    <Login
      submitLogin={(login) => console.log('Login Request:\n', login)}//{props.submitLogin}
      errors={props.errors}
    />
  </Container>
);


export default Home;
