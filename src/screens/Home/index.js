import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Overview from "../../components/Overview";
import Settings from "../../components/Settings";
import CellPhone from "../../components/CellPhone";
import Wifi from "../../components/Wifi";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Home">
      <Tab.Screen
        name="KnowN Me - IP Info"
        component={Overview}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#F4717F",
          tabBarInactiveTintColor: "gray",
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
          tabBarShowLabel: false,
          tabBarLabel: "Wi-Fi",
          tabBarActiveTintColor: "#F4717F",
          tabBarInactiveTintColor: "gray",
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
          tabBarShowLabel: false,
          tabBarLabel: "Wi-Fi",
          tabBarActiveTintColor: "#F4717F",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wifi" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
