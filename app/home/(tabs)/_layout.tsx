import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff4500",
        tabBarItemStyle: { padding: 5 },
        tabBarLabelStyle: { fontSize: 15, marginTop: -5 },
        tabBarStyle: { height: 60 },
        header: () => <Header />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          title: "Completed",
          tabBarIcon: ({ color }) => (
            <AntDesign name="checkcircleo" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
