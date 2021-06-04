import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import SignUpForm from "./SignUpForm";
import { AuthContext } from "../../context/AuthProvider";

export default function AuthForm() {
  const [login, setLogin] = useState(false);

  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PICKUP</Text>
      {login ? null : <SignUpForm />}
      <Button onPress={() => setUser(true)} title="Login Bypass" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    alignItems: "center"
  },
  logo: {
    marginTop: 120,
    marginBottom: 80,
    fontSize: 48,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#333333"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
});
