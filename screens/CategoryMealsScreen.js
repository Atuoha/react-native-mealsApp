import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>

      <Button title="Meal Detailed Screen" onPress={()=>{
        props.navigation.navigate('MealDetail')
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
