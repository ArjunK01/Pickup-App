import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import AuthForm from "./AuthForm";
import { AuthContext } from "../../context/AuthProvider";

export default function Auth() {
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PICKUP</Text>
      <AuthForm />
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
    color: "black"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
});
