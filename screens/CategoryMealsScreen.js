import React, { useEffect } from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector} from 'react-redux'

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const categoryMeals = availableMeals.filter(
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
