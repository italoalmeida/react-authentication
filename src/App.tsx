import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Router } from 'react-router-dom';
import Routes from './routes/routes';
import history from './service/history';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>

      <GlobalStyles />
    </>
  );
}

export default App;
