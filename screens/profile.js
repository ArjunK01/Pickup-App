//this screen will display profile information
import React from "react";
import firebase from "../firebase/firebase";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

//inside paranthesis will be props:User
const Profile = () => {
  const {user,userID} = useContext(AuthContext)

  const signOut = () => {
    firebase.auth().signOut();
  };

  const doThing=()=>{
    console.log(userID)
  }

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
      <Button title="test"  onPress={()=>doThing()}/>
    </View>
  );
};

export default Profile;
