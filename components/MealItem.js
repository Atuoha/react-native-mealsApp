import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
} from "react-native";

const MealItem = (props) => {
  const RenderComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    RenderComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <RenderComponent style={{ flex: 1 }} onPress={props.onPressFnc}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}>
              <View style={styles.textContainer}>
                <Text style={styles.mealTitle} numberOfLines={1}>
                  {props.name}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetails]}>
            <Text>{props.duration}m</Text>
            <Text>{props.cost}</Text>
            <Text>{props.type}</Text>
          </View>
        </View>
      </RenderComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    flex: 1,
    margin: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    shadowRadius: 10,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
    elevation: 3,
    overflow: "hidden",
    // alignItems: 'center'
  },
  mealRow: {
    flexDirection: "row",
  },
  bgImage: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  mealTitle: {
    fontFamily: "open-sans",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  mealHeader: {
    height: "85%",
  },

  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    marginTop: 2,
  },
});

export default MealItem;
