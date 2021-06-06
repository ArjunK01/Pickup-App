import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      console.log("In fireabse auth state change");
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
        setUser(null);
      }
    });
    return unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export { AuthContext };
