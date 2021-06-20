import React from "react";
import { MealsNavigator, MealsTabNavigator } from "./navigation/MealsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useScreens } from "react-native-screens";
// useScreens();

export default function App() {
  return (
    <NavigationContainer>
      <MealsTabNavigator />
    </NavigationContainer>

  );
}

