import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>todo app</Text>
      <Feather name="menu" size={35} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#ff4500",
  },
});
