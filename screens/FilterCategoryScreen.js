import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Color from "../constants/Color";
import FilterSwitch from "../components/FilterSwitch";

const FilterCategoryScreen = ({ route, navigation }) => {
  const [gluten, setGluten] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

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
        onPress={() => console.log(`Gluten: ${gluten},Vegetarian: ${vegetarian},Lactose: ${lactose},Vegan: ${vegan},`)}
      />
      )
    });
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch
        label="Glueten Free"
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
