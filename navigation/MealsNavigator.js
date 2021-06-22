import React from "react";
import { Platform, useWindowDimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Color from "../constants/Color";
import FavoriteScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterCategoryScreen";

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" || "web" ? Color.primary : "",
  },
  headerTintColor: Platform.OS === "android" || "web" ? "white" : Color.primary,

  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const Stack = createStackNavigator();

export const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
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

const favStackNavigator = createStackNavigator();

const FavNavigator = () => {
  return (
    <favStackNavigator.Navigator screenOptions={screenOptions}>
      <favStackNavigator.Screen
        name="Favorites 🤍"
        component={FavoriteScreen}
      />
      <favStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
      />
    </favStackNavigator.Navigator>
  );
};

// Bottom Tab
const Tab = createBottomTabNavigator();
export const MealsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: Color.primary,
        inactiveTintColor: Color.accent,
        activeBarIconColor: "white",
      }}>
      <Tab.Screen
        name="Meal"
        component={MealsNavigator}
        options={{
          tabLabel: "Meals :)",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={Color.accent} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavNavigator}
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

// Filter Screen
const filterStackNavigator = createStackNavigator();

const filterNavigator = () => {
  return (
    <filterStackNavigator.Navigator screenOptions={screenOptions}>
      <filterStackNavigator.Screen name="Filter ⚙" component={FilterScreen} />
    </filterStackNavigator.Navigator>
  );
};

// const dimensions = useWindowDimensions();

// Drawer Navigation
const Drawer = createDrawerNavigator();
export const MainNavigation = () => {
  return (
    <Drawer.Navigator
      contentOptions={{ 
        activeTintColor: Color.accent,
        activeBackgroundColor: Color.primary,
        inactiveTintColor: Color.accent,
      }}>
      <Drawer.Screen name="Meals" component={MealsTabNavigator} options={{activeTintColor: Color.accent}} />
      <Drawer.Screen name="Filter" component={filterNavigator} />
    </Drawer.Navigator>
  );
};
