import React from "react";
import { MainNavigation } from "./navigation/MealsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealReducer from "./store/reducers/meal";

import { useScreens } from "react-native-screens";
// useScreens();

const rootReducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
   </Provider>
  );
}
