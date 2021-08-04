import { createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const contextName = 'recoil,yeeeee';
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
