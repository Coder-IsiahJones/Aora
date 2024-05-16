import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        Got to profile
      </Link>
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
});
