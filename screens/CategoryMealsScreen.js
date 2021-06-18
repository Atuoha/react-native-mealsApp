import React, { useEffect } from "react";

import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const categoryMeals = MEALS.filter(
    (meal) => meal.catIds.indexOf(categoryId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  useEffect(()=>{
    navigation.setOptions({
      headerTitle: selectedCategory.title
    })
  })

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        name={itemData.item.name}
        duration={itemData.item.duration}
        cost={itemData.item.cost}
        type={itemData.item.type}
        image={itemData.item.imageUrl}
        onPressFnc={() => {
          navigation.navigate("MealDetail", { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <FlatList data={categoryMeals} renderItem={renderMealItem} numColumns={2} />
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoryMealsScreen;
