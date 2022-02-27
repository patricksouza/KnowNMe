import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

const AppStack = createStackNavigator();
import Home from "./screens/Home";

export default function Route() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
