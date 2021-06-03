import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Login from "../screens/Login";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

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
          <Tab.Screen name="Home" component={Home} />
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
//testing push 
