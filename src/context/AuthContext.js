import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

//Hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}

//Create the provider
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const signUp = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //review this const implementation
  const value = {
    currentUser,
    signUp,
    signIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
