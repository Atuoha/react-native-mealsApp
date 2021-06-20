import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const FilterCategoryScreen = () => {
  useEffect(()=>{
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          size={30}
          color={Platform.OS === "android" || "web" ? "white" : Color.accent}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    })
  })

  return (
    <View style={styles.screen}>
      <Text>FilterCategory</Text>
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

export default FilterCategoryScreen;
