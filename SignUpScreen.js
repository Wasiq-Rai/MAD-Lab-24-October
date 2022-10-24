import { StatusBar } from "expo-status-bar";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase.auth();
  const createUser = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        // QUERY Firestore Ko Data Send Kar dain gai
        console.log("firebase return is = ", data);
      })
      .catch((error) => {
        console.log("Catch Error", error);
      });
  };
  const guestUser = () => {
    auth
      .signInAnonymously()
      .then((data) => {
        // QUERY Firestore Ko Data Send Kar dain gai
        console.log("firebase return is = ", data);
      })
      .catch((error) => {
        console.log("Catch Error", error);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/comsats.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={createUser}>
        <Text style={{ color: "white" }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.loginBtn, { backgroundColor: "red" }]}
        onPress={guestUser}
      >
        <Text style={{ color: "white" }}>Guest SIgnIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    borderColor: "black",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "green",
  },
});
