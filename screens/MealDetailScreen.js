import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MEALS } from '../data/dummy-data'
// import { HeaderButtons, Item } from 'react-navigation-header-button'
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParams('mealId');
  const Mealdetails = MEAL.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Image source={{uri: Mealdetails.imageUrl}} />
      <Text>{Mealdetails.name}</Text>
    </View>
  );
};


MealDetailScreen.navigationOptions = (navigationData)=>{
  const mealId = navigationData.navigation.getParams('mealId');
  const selectedMeal = MEALS.find(meal=> meal.id === mealId)

  // return{
  //   headerTitle: selectedMeal.name,
  //   headerRight: 
  //   <HeaderButton HeaderButtonComponent={HeaderButton}>
  //     <Item title="favorite" iconName="ios-star" onPress={()=> {}} />
  //   </HeaderButton>
  // }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
