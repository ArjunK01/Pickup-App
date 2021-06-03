import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AuthForm from "../components/auth/AuthForm";

export default function Login() {
  return (
    <View style={styles.container}>
      <AuthForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "orange",
    borderWidth: 2
  }
});
