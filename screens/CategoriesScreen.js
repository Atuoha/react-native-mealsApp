import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>CategoriesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle:{
      fontFamily: 'open-sans-bold',
      fontWeight: 'bold',
  }
});

export default CategoriesScreen;
