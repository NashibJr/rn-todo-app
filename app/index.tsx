import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Href, useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  React.useEffect(() => {
    const navigate = setInterval(() => {
      router.replace("/auth/login" as unknown as Href<string | object>);
    }, 5000);

    return () => clearInterval(navigate);
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>todo app</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FF4500",
  },
});
