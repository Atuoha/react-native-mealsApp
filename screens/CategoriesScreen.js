import React, { useEffect } from "react";
import { StyleSheet, FlatList, Platform } from "react-native";
import CategoryGrid from "../components/CategoryGrid";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { CATEGORIES } from "../data/dummy-data";
import Color from "../constants/Color";

const CategoriesScreen = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Meals Categories",
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          size={30}
          color={Platform.OS === "android" || "web" ? "white" : Color.accent}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    });
  });

  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        id={itemData.item.id}
        onPressFnc={() =>
          navigation.navigate("CategoryMeals", { categoryId: itemData.item.id })
        }
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontWeight: "bold",
  },
});

export default CategoriesScreen;
