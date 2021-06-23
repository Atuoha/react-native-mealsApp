import React, { useEffect } from "react";
import {Platform, View, Text, StyleSheet } from "react-native";
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


  if(favoriteMeals.length <=0){
    return <><View style={styles.screen}><Text style={styles.text}>🔔 No favorites to display!</Text></View></>
  }else{
   return <MealList meals={favoriteMeals} navigation={navigation} />;
  }

 
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  text:{
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default FavoriteScreen;
