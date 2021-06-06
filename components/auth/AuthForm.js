import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
import { black, red, white } from "ansi-colors";
import firebase from "../../firebase/firebase";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState(true);

  const auth = firebase.auth();
  const db = firebase.firestore();

  const registerUser = async () => {
    console.log("User being registered");
    try {
      let newUser = await auth.createUserWithEmailAndPassword(email, password);
      console.log("email", email);
      db.collection("Users")
        .doc(newUser.user.uid)
        .set({ name });
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = () => {
    email && password && auth.signInWithEmailAndPassword(email, password);
  };

  const signUpForm = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => {
            registerUser();
          }}
          style={styles.submitBtn}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <Button
          title="Already have an account? Log In"
          onPress={() => setLogin(true)}
        />
      </View>
    );
  };

  const logInForm = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => {
            loginUser();
          }}
          style={styles.submitBtn}
        >
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account? Sign In"
          onPress={() => setLogin(false)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>{login ? logInForm() : signUpForm()}</View>
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
  submitBtn: {
    display: "flex",
    backgroundColor: "black",
    width: "80%",
    color: "white",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 3,
    marginTop: 12
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.8
  },
  nameContainer: {
    justifyContent: "space-between",
    flexDirection: "row"
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
