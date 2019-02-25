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
      allPageComponents.map(({name, component}) =>
        <Route
          key={name}
          path={`/${name}`}
          component={component}
        />
      )
    }
    <Route component={getPageComponent(errorPage)} />
  </Switch>
);


export default Routes;
