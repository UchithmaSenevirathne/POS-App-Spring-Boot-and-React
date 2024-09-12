import React, { createContext, useContext, useState } from 'react';

// Create a Context
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUserContext = () => useContext(UserContext);

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ role: 'USER', profilePic: null, name: 'Guest' });

  const setUserDetails = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
