import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Color from '../constants/Color'

const CategoryGrid = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{flex: 1}} onPress={props.onPressFnc}>
        <View
          style={styles.container}>
          <Text style={styles.textStyle} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21  ? 'hidden' : 'visible',
    elevation: 3,
  },

  container: {
    flex: 1,
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: Color.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.50,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },

  textStyle: {
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CategoryGrid;
