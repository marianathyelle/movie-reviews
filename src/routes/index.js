import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardInterface } from '../interfaces/Dashboard';
import { ReviewInterface } from '../interfaces/Review';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={DashboardInterface} />
    <Route path="/review/:id" component={ReviewInterface} />
  </Switch>
);

export default Routes;