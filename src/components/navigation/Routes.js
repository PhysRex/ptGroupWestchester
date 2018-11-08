import React from 'react';

// import route Components here
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  Home,
  Profile,
  Dashboard,
  Game,
  ErrorPage
} from '../../components/pages';

export const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/home' component={Home}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/game' component={Game}/>
    <Route component={ErrorPage}/>
  </Switch>
);


export default Routes;
