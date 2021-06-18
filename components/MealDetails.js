import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Color from '../constants/Color'


const MealDetails = (props) => {

  return (
    <View style={styles.screen}>
       <Text style={styles.title}>{props.name}</Text>
      <View style={styles.row}>
        <View style={[styles.col_6, styles.imgContainer]}>
          <View style={styles.img_style}>
           <Image source={{ uri: props.imageUrl }} />
          </View>
        </View>

        <View style={[styles.col_6, styles.textContainer]}>
          <Text><b>Cost:</b> {props.cost}</Text>
          <Text><b>Type:</b> {props.type}</Text>
          <Text><b>Duration:</b> {props.duration}</Text>
          <Text><b>Ingredients:</b> {props.ingredients}</Text>
          <Text><b>Steps:</b> {props.steps}</Text>
          <Text><b>Gluten Free:</b> {props.isGlutenFree === false ? 'No' : 'Yes'}</Text>
          <Text><b>Vegan:</b> {props.isVegan === false ? 'No' : 'Yes'}</Text>
          <Text><b>Vegetarian:</b> {props.isVegetarian === false ? 'No' : 'Yes'}</Text>
          <Text><b>Lactose Free:</b> {props.isLactoseFree === false ? 'No' : 'Yes'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20
  },

  title:{
    fontFamily: 'open-sans',
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
