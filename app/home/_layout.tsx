import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/Header";

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ header: () => <Header /> }} />
    </Stack>
  );
};

export default HomeLayout;
