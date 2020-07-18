import React, { createContext, useState, useContext } from 'react';

import * as authService from '../service/auth';

interface Context {
  authenticated: boolean;
  loading: boolean;
  signIn(credentials: any): Promise<void>;
  signOut(): any;
}

const AuthContext = createContext<Context>({} as Context);

const AuthProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = async (credentials: any): Promise<any> => {
    try {
      setLoading(true);
      await authService.signIn(credentials);
      setAuthenticated(true);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setLoading(true);
    setAuthenticated(false);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
