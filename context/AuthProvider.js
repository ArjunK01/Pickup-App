import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        firebase
          .firestore()
          .collection("Users")
          .doc(firebaseUser.uid)
          .get()
          .then(function(doc) {
            setUser(doc.data());
          });
      } else {
        setTimeout(() => {
          setUser(firebaseUser);
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
