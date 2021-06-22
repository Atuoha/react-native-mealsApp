import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Color from "../constants/Color";

const MealDetails = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.row}>
        <View style={[styles.col_6, styles.imgContainer]}>
          <View style={styles.img_style}>
            <Image source={{ uri: props.imageUrl }} style={styles.imageStyle} />
          </View>
        </View>

        <View style={[styles.col_6, styles.textContainer]}>
          <View style={styles.textRow}>
            <Text style={{ fontWeight: "bold" }}>{props.cost}</Text>
            <Text style={{ fontWeight: "bold" }}>{props.type}</Text>
            <Text style={{ fontWeight: "bold" }}>{props.duration}m</Text>
          </View>

          <View style={styles.textInnerContainer}>
            <Text style={styles.conTitle}>
              Ingredients:
            </Text>
            {props.ingredients.map((item) => (
              <Text style={styles.arrayItemContainer} key={item}>
                {item}
              </Text>
            ))}
          </View>
          <View style={styles.textInnerContainer}>
            <Text style={styles.conTitle}>
              Steps:
            </Text>
            {props.steps.map((item) => (
              <Text style={styles.arrayItemContainer} key={item}>
                {item}
              </Text>
            ))}
          </View>

          <View style={styles.freeFromColumn}>
            <Text style={styles.conTitle}>Gluten Free: </Text>
            <Text>{props.isGlutenFree === false ? "No" : "Yes"}</Text>
          </View>
          <View style={styles.freeFromColumn}>
            <Text style={styles.conTitle}>Vegan: </Text>
            <Text>{props.isVegan === false ? "No" : "Yes"}</Text>
          </View>
          <View style={styles.freeFromColumn}>
            <Text style={styles.conTitle}>Vegetarian: </Text>
            <Text>{props.isVegetarian === false ? "No" : "Yes"}</Text>
          </View>
          <View style={styles.freeFromColumn}>
            <Text style={styles.conTitle}>Lactose Free: </Text>
            <Text>{props.isLactoseFree === false ? "No" : "Yes"}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
  },

  imageStyle: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  textInnerContainer: {
    marginVertical: 3,
  },

  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 12,
  },

  freeFromColumn: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },

  arrayItemContainer: {
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 10,
    borderWidth: 1,
    marginTop: 5,
  },

  conTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },

  row: {
    // flexDirection: "row",
  },

  col_6: {
    margin: 10,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowColor: Color.primary,
    shadowRadius: 10,
    elevation: 3,
  },
  imgContainer: {
    minHeight: 300,
    maxHeight: 300,
  },
  img_style: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    minHeight: 300,
    padding: 12,
  },
});

export default MealDetails;
