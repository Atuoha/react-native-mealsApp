import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Color from "../constants/Color";
import FilterSwitch from "../components/FilterSwitch";
import { setFilters } from '../store/actions/meal'
import { useDispatch } from 'react-redux'

const FilterCategoryScreen = ({ route, navigation }) => {
  const [gluten, setGluten] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

  const filters = {
    gluten,
    lactose,
    vegan,
    vegetarian
  }

  const dispatch = useDispatch()
  const filterMeals = useCallback((filters)=>{
    dispatch(setFilters(filters))
  }, [dispatch,filters])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          size={30}
          color={Platform.OS === "android" || "web" ? "white" : Color.accent}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerRight: ()=>(
        <Ionicons
        name="ios-save"
        size={20}
        color={Platform.OS === "android" || "web" ? "white" : Color.accent}
        onPress={filterMeals(filters)}
      />
      )
    });
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch
        label="Gluten Free"
        stateValue={gluten}
        onChangeFnc={(newValue) => setGluten(newValue)}
      />
      <FilterSwitch
        label="Vegatarian"
        stateValue={vegetarian}
        onChangeFnc={(newValue) => setVegetarian(newValue)}
      />
      <FilterSwitch
        label="Lactose Free"
        stateValue={lactose}
        onChangeFnc={(newValue) => setLactose(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        stateValue={vegan}
        onChangeFnc={(newValue) => setVegan(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    margin: 20,
    fontWeight: "bold",
  },
});

export default FilterCategoryScreen;
