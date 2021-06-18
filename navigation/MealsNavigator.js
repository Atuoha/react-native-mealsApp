import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Color from "../constants/Color";
import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createStackNavigator();

export const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" || "web" ? Color.primary : "",
        },
        headerTintColor:
          Platform.OS === "android" || "web" ? "white" : Color.primary,

        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        // options={{ headerTitle: "Meals Categories" }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
    </Stack.Navigator>
  );
};

// Bottom Tab
const Tab = createBottomTabNavigator();
export const MealsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.accent,
        activeBackgroundColor: Color.primary,
        inactiveTintColor: Color.accent,
      }}>
      <Tab.Screen
        name="Meal"
        component={MealsNavigator}
        options={{
          tabLabel: "Meals :)",
          inactiveTintColor: "red",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={Color.accent} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabLabel: "Favorites!",
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={Color.accent} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
