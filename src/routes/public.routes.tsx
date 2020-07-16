import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="*" component={SignIn} />
    </Switch>
  );
};

export default PublicRoutes;
