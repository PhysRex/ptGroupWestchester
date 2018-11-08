import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import { HeadBanner } from '../templates';

const Profile = ({ match }) => (
  <Container>
    <HeadBanner
      content='Profile'
      subheader='User settings can be updated here'
    />
    <ul>
      <li><Link to={`${match.url}/html`}>HTML</Link></li>
      <li><Link to={`${match.url}/css`}>CSS</Link></li>
      <li><Link to={`${match.url}/react`}>React</Link></li>
    </ul>

    <div>
      <Route path={`${match.path}/html`} render={() => <h1>HTML by Ducket book</h1> }/>
      <Route path={`${match.path}/css`} render={() => <h1>CSS by Racheal Andrews</h1> }/>
      <Route path={`${match.path}/react`} render={() => <h1>React by Fullstack.io book</h1> }/>
    </div>

  </Container>
);

export default Profile;