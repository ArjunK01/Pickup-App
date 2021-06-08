//this screen will display profile information
import React from "react";
import firebase from "../firebase/firebase";
import { View, Text, Button } from "react-native";

//inside paranthesis will be props:User
const Profile = () => {
  const signOut = () => {
    firebase.auth().signOut();
  };
  return (
    <View>
      <Text>Profile Scsreen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default Profile;
