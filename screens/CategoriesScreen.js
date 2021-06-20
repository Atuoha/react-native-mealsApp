import React, {useEffect} from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import CategoryGrid from "../components/CategoryGrid";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({route, navigation}) => {
  
  useEffect(()=>{
    navigation.setOptions({
      headerTitle: 'Meals Categories'
    })
  })

  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        id={itemData.item.id}
        onPressFnc={() => navigation.navigate("CategoryMeals", { categoryId: itemData.item.id})}
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
