import React, { useEffect, useCallback } from "react";
import { MEALS } from "../data/dummy-data";
// import { HeaderButtons, Item } from 'react-navigation-header-button'
import HeaderButton from "../components/HeaderButton";
import Color from "../constants/Color";
import MealDetails from "../components/MealDetails";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite} from '../store/actions/meal' 

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const { mealTitle } = route.params;
  const availableMeals = useSelector(state=> state.meals.meals)
  const Mealdetails = availableMeals.find((meal) => meal.id === mealId);

  const favoriteMeals =  useSelector(state => state.meals.favoriteMeals)
  const favStatus = favoriteMeals.findIndex(meal => meal.id === mealId)
  let isFavorite;
  if(favStatus >= 0){
    isFavorite = true
  }else{
    isFavorite = false;
  }

  const dispatch = useDispatch()
  const toggleFavoriteHandler = useCallback(()=>{
    dispatch(toggleFavorite(mealId))
    console.log('favorite pressed')
  }, [dispatch, mealId])

  useEffect(()=>{
    navigation.setOptions({
      headerTitle: mealTitle,
      headerRight:()=>(
        <Ionicons name={isFavorite ? "ios-star" : "ios-star-outline"} size={25} color={isFavorite ? "gold" : "white"} onPress={toggleFavoriteHandler} />
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
