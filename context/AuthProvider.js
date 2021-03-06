import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userID,setUserId]= useState('')

  useEffect(() => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      console.log("In fireabse auth state change");
      if (firebaseUser) {
        firebase
          .firestore()
          .collection("Users")
          .doc(firebaseUser.uid)
          .get()
          .then(function(doc) {

            setUser(doc.data());
            setUserId(firebaseUser.uid)
          });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser,userID }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export { AuthContext };
