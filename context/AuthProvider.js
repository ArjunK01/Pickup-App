import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.auth().onAuthStateChanged(firebaseUser => {
      setPending(true);
      if (firebaseUser) {
        firebase
          .firestore()
          .collection("Users")
          .doc(firebaseUser.uid)
          .get()
          .then(function(doc) {
            setUser(doc.data());
            setPending(false);
          });
      } else {
        setTimeout(() => {
          setUser(firebaseUser);
          setPending(false);
        }, 300);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export { AuthContext };
