import React, { useEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoriteScreen = ({ navigation }) => {

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

  return <MealList meals={MEALS} navigation={navigation} />;
};

export default FavoriteScreen;
