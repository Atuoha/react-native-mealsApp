import React, { useEffect } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Color from "../constants/Color";

const FilterCategoryScreen = ({route, navigation}) => {
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
