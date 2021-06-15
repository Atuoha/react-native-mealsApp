import { Platform } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Color from "../constants/Color";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" || "web" ? Color.primary : "",
    },
    headerTintColor:
      Platform.OS === "android" || "web" ? "white" : Color.primary,
  }
});

export default createAppContainer(MealsNavigator);
