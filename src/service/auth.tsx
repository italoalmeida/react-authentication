const signIn = (credentials: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // simulates a api request to get a auth token
      resolve();
    }, 2000);
  });
};

export { signIn };
