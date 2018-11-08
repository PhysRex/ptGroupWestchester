import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { homePage, errorPage, ComponentPagesForRoutes } from './config';


const Pages = ComponentPagesForRoutes();

export const Routes = () => (
  <Switch>
    <Route path='/' exact component={Pages[homePage]}/>
    {
      Pages.map((page) =>
        <Route
          key={page.name}
          path={`/${page.name}`}
          component={page}
        />
      )
    }
    <Route component={Pages[errorPage]}/>
  </Switch>
);


export default Routes;
