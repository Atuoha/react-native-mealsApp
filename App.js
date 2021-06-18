import React from "react";
import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
