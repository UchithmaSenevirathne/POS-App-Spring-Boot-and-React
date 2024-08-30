import React, { createContext, useContext, useState } from 'react';

// Create a Context
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUserContext = () => useContext(UserContext);

// Create a Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ role: 'USER', profilePic: null, name: 'Guest' });

  // Function to update the user details
  const setUserDetails = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};