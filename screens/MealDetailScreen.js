import React, { useEffect } from "react";
import { MEALS } from "../data/dummy-data";
// import { HeaderButtons, Item } from 'react-navigation-header-button'
import HeaderButton from "../components/HeaderButton";
import Color from "../constants/Color";
import MealDetails from "../components/MealDetails";
import { Ionicons } from "@expo/vector-icons";


const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const Mealdetails = MEALS.find((meal) => meal.id === mealId);

  useEffect(()=>{
    navigation.setOptions({
      headerTitle: Mealdetails.name,
      headerRight:()=>(
        <Ionicons name="ios-star-outline" size={25} color={Color.accent} />
      )
    })
  })


  
    // return{
    //   headerTitle: selectedMeal.name,
    //   headerRight:
    //   <HeaderButton HeaderButtonComponent={HeaderButton}>
    //     <Item title="favorite" iconName="ios-star" onPress={()=> {}} />
    //   </HeaderButton>
    // }

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



export default MealDetailScreen;
