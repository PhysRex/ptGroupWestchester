import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  homePage,
  errorPage,
  getPageComponent,
  allPageComponents
} from './config';


export const Routes = () => (
  <Switch>
    <Route path='/' exact component={getPageComponent(homePage)} />
    {
      allPageComponents.map((page) =>
        <Route
          key={page.name}
          path={`/${page.name}`}
          component={page}
        />
      )
    }
    <Route component={getPageComponent(errorPage)} />
  </Switch>
);


export default Routes;
