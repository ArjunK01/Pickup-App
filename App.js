import * as React from "react";
import Navigation from "./navigation/Navigation";
import ContextWrapper from "./components/ContextWrapper";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContextWrapper>
        <Navigation />
      </ContextWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 2
  }
});
