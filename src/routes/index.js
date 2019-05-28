import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardInterface } from '../interfaces/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={DashboardInterface} />
  </Switch>
);

export default Routes;