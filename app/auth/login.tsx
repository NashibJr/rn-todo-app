import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/Input";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/validataion";
import width from "@/constants/width";

type UserProps = {
  username: string;
  password: string;
};

const LoginScreen = () => {
  const handleSubmit = (values: UserProps) => {
    console.log(values, ">>>>");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    } as UserProps,
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.welcome]}>Welcome</Text>
        <Text style={[styles.small]}>Login to continue</Text>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="User name"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          label="Username"
          error={
            formik.touched.username &&
            formik.errors.username &&
            (formik.errors.username! as unknown as any)
          }
          style={[styles.input]}
          placeholderTextColor="rgba(0 ,0 ,0, .3)"
        />
        <Input
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          label="Password"
          error={
            formik.touched.password &&
            formik.errors.password &&
            (formik.errors.password! as unknown as any)
          }
          style={[styles.input]}
          placeholderTextColor="rgba(0 ,0 ,0, .3)"
          secureTextEntry
        />
        <Pressable onPress={() => formik.handleSubmit()} style={styles.btn}>
          <Text style={styles["btn-label"]}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: "auto",
  },
  welcome: {
    fontSize: 40,
    fontWeight: "bold",
  },
  small: {
    fontSize: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 40,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#d3d3d3",
  },
  btn: {
    padding: 15,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 50,
    backgroundColor: "#FF4500",
    marginTop: 20,
  },
  "btn-label": {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
