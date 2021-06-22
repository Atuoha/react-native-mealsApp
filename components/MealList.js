import React from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        name={itemData.item.name}
        duration={itemData.item.duration}
        cost={itemData.item.cost}
        type={itemData.item.type}
        image={itemData.item.imageUrl}
        onPressFnc={() => {
          props.navigation.navigate("MealDetail", { mealId: itemData.item.id, mealTitle: itemData.item.name });
        }}
      />
    );
  };

  return (
    <FlatList data={props.meals} renderItem={renderMealItem} numColumns={2} />
  );
};

export default MealList;
