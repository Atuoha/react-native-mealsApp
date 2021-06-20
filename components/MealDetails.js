import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Color from '../constants/Color'


const MealDetails = (props) => {

  return (
    <ScrollView style={styles.screen}>
       <Text style={styles.title}>{props.name}</Text>
      <View style={styles.row}>
        <View style={[styles.col_6, styles.imgContainer]}>
          <View style={styles.img_style}>
           <Image source={{ uri: props.imageUrl }} />
          </View>
        </View>

        <View style={[styles.col_6, styles.textContainer]}>
          <Text>Cost: {props.cost}</Text>
          <Text>Type: {props.type}</Text>
          <Text>Duration: {props.duration}</Text>
          <Text>Ingredients: {props.ingredients}</Text>
          <Text>Steps: {props.steps}</Text>
          <Text>Gluten Free: {props.isGlutenFree === false ? 'No' : 'Yes'}</Text>
          <Text>Vegan: {props.isVegan === false ? 'No' : 'Yes'}</Text>
          <Text>Vegetarian: {props.isVegetarian === false ? 'No' : 'Yes'}</Text>
          <Text>Lactose Free: {props.isLactoseFree === false ? 'No' : 'Yes'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  row: {
    // flexDirection: "row",
  },

  col_6: {
    margin: 10,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.50,
    shadowColor: Color.primary,
    shadowRadius: 10,
    elevation: 3,
  },
  imgContainer:{
    height:200
  },
  img_style:{
    width: '100%',
    height: '100%'
  },

  textContainer:{
    minHeight: 300,
    padding: 10
  },

});

export default MealDetails;
