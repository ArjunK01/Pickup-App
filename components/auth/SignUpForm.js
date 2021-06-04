import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { black, red } from "ansi-colors";






export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");

  const registerUser=()=>{
    console.log("User being registered")

  }

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <TextInput
          style={{ ...styles.input, ...styles.nameInput }}
          placeholder="First"
        />
        <TextInput
          style={{ ...styles.input, ...styles.nameInput }}
          placeholder="Last"
        />
      </View>

      

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={()=>{registerUser}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderColor: "blue",
    borderWidth: 2,
    alignItems: "center"
  },
  nameContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nameInput: {
    width: "48%"
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 3,
    width: "80%",
    fontSize: 24
  }
});
