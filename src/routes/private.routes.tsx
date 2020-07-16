import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default PrivateRoutes;
