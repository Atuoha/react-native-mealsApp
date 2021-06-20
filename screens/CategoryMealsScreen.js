import React, { useEffect } from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const categoryMeals = MEALS.filter(
    (meal) => meal.catIds.indexOf(categoryId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  });

  return <MealList meals={categoryMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
