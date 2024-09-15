import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  type TextInputProps,
} from "react-native";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...props} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
  },
  error: {
    color: "#f00",
    fontSize: 16,
    fontWeight: "semibold",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
