import React, { useEffect } from "react";
import {Platform } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Color from "../constants/Color";
import { useSelector} from 'react-redux'

const FavoriteScreen = ({ navigation }) => {

const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

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

  return <MealList meals={favoriteMeals} navigation={navigation} />;
};

export default FavoriteScreen;
