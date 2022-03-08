import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Overview from "../../components/Overview";
import CellPhone from "../../components/CellPhone";
import Wifi from "../../components/Wifi";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1E1E1E",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#F4717F",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1E1E1E",
          borderTopColor: "rgba(255,255,255,0.0)",
        },
      }}
    >
      <Tab.Screen
        name="KnowN Me - IP Info"
        component={Overview}
        screenOptions={{ headerShown: false }}
        options={{
          title: "KnowN Me - IP Info",
          tabBarLabel: "Home",
          tabBarActiveBackgroundColor: "#1a1a1a",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="access-point-network"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="KnowN Me - Phone"
        component={CellPhone}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel: "Phone",
          tabBarActiveBackgroundColor: "#1a1a1a",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cellphone"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="KnowN Me - Wi-Fi"
        component={Wifi}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel: "Wi-Fi",
          tabBarActiveBackgroundColor: "#1a1a1a",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wifi" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="KnowN Me - Tools"
        component={Wifi}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel: "tools",
          tabBarActiveBackgroundColor: "#1a1a1a",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tools" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
