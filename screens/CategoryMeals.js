import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CategoryMeals = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
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

export default CategoryMeals;
