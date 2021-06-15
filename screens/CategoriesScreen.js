import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryGrid from "../components/CategoryGrid";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {

  navigationFnc = (itemId) => {
    props.navigation.navigate({
      routeName: "CategoryMeals",
      params: { categoryId: itemId },
    });
  };

  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        id={itemData.item.id}
        onPressFnc={navigationFnc}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontFamily: "open-sans-bold",
    fontWeight: "bold",
  },
});

export default CategoriesScreen;
