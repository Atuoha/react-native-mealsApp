import React from "react";
import { MEALS } from "../data/dummy-data";
// import { HeaderButtons, Item } from 'react-navigation-header-button'
import HeaderButton from "../components/HeaderButton";
import Color from "../constants/Color";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const Mealdetails = MEALS.find((meal) => meal.id === mealId);

  return (
    <MealDetails
      name={Mealdetails.name}
      imageUrl={Mealdetails.imageUrl}
      cost={Mealdetails.cost}
      type={Mealdetails.type}
      duration={Mealdetails.duration}
      ingredients={Mealdetails.ingredients}
      steps={Mealdetails.steps}
      isGlutenFree={Mealdetails.isGlutenFree}
      isVegan={Mealdetails.isVegan}
      isVegetarian={Mealdetails.isVegetarian}
      isLactoseFree={Mealdetails.isLactoseFree}
    />
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParams("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // return{
  //   headerTitle: selectedMeal.name,
  //   headerRight:
  //   <HeaderButton HeaderButtonComponent={HeaderButton}>
  //     <Item title="favorite" iconName="ios-star" onPress={()=> {}} />
  //   </HeaderButton>
  // }
};

export default MealDetailScreen;
