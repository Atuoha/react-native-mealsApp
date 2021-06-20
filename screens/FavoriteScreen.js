import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoriteScreen = ({ navigation }) => {
  return <MealList meals={MEALS} navigation={navigation} />;
};

export default FavoriteScreen;
