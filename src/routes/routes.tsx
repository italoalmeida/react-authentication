import React from 'react';

import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';
import { useAuth } from '../context/AuthContext';

const Routes = () => {
  const { authenticated } = useAuth();
  return authenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
