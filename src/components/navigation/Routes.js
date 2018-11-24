import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { homePage, errorPage, ComponentPagesForRoutes } from './config';


const Pages = ComponentPagesForRoutes();
console.log(Pages)
console.log(Pages[ homePage])


export const Routes = () => (
  <Switch>
    <Route path='/' exact component={Pages[homePage]}/> // FIXME: not working because array no object
    {
      Pages.map((page) =>
        <Route
          key={page.name}
          path={`/${page.name}`}
          component={page}
        />
      )
    }
    <Route component={Pages[errorPage]}/> // FIXME: not working because array no object
  </Switch>
);


export default Routes;
