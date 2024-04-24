import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const signUp = (email, password) => {
    // For demo purposes, you can simply set the currentUser in localStorage
    localStorage.setItem("user", JSON.stringify({ email }));
    setCurrentUser({ email });
  };

  const signIn = (email, password) => {
    // For demo purposes, you can simply set the currentUser in localStorage
    localStorage.setItem("user", JSON.stringify({ email }));
    setCurrentUser({ email });
  };

  const signOut = () => {
    // Clear the user from localStorage
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
