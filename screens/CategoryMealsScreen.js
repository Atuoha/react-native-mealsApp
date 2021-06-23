import React, { useEffect } from "react";
import MealList from "../components/MealList";
import {View, Text, StyleSheet} from 'react-native'
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

  if(categoryMeals.length <=0){
    return <><View style={styles.screen}><Text style={styles.text}>🔔 No meals to display!</Text></View></>
  }else{
   return <MealList meals={categoryMeals} navigation={navigation} />;
  }

};


const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  text:{
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default CategoryMealsScreen;
