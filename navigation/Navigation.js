import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack"
import Home from "../screens/Home";
import Finder from "../screens/Finder";
import Profile from "../screens/profile";
import Messages from "../screens/Messages";
import OtherProfile from "../screens/OtherProfile"
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Login from "../screens/Login";
import { View, StyleSheet } from "react-native";
import LogIn from "../components/auth/LoginForm"
import SignUpForm from "../components/auth/SignUpForm"
import { TouchableOpacity } from "react-native-gesture-handler"
import {Text,Button} from 'react-native'
import {Ionicons} from '@expo/vector-icons'






const Tab = createBottomTabNavigator();
const Stack= createStackNavigator();
const LoginStack= createStackNavigator();

const entryStack=()=>{
  return(
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LogIn}/>
      <LoginStack.Screen name="Sign Up" component={SignUpForm}/>
  
    </LoginStack.Navigator>
  )
}

const homeStack=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={({navigation})=>({
        headerTitle:()=><Button title="Home" onPress={()=>{console.log("refresh")}}/>,
        headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate("Messages")}><Ionicons name="chatbox" size={24}/></TouchableOpacity>
      })}/>
      <Stack.Screen name="Messages" component={Messages}/>
      <Stack.Screen name="OtherProfile" component={OtherProfile}/>

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
          <Tab.Screen name="Home" component={homeStack} />
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

