import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Router } from 'react-router-dom';
import Routes from './routes/routes';
import history from './service/history';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
