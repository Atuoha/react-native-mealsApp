import React, { useEffect } from "react";
import {Platform } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Color from "../constants/Color";


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
