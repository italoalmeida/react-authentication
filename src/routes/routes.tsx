import React from 'react';

import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';

const Routes = () => {
  const authenticated = false;
  return authenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
