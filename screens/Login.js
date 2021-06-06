import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Auth from "../components/auth/Auth";

export default function Login() {
  return (
    <View style={styles.container}>
      <Auth />
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
