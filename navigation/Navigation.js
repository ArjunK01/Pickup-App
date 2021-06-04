import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack"
import Home from "../screens/Home";
import Finder from "../screens/Finder";
import Profile from "../screens/Profile";
import Messages from "../screens/Messages";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Login from "../screens/Login";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const Stack= createStackNavigator();

const messageTransition=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen names="Home" component={Home}/>
      <Stack.Screen names="Messages" component={Messages}/>

    </Stack.Navigator>
  )
}

export default function Navigation() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user ? (
        <View style={styles.container}>
          <Login />
        </View>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={messageTransition} />
          <Tab.Screen name="Finder" component={Finder}/>
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

