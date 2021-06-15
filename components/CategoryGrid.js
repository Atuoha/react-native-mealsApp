import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGrid = (props) => {
  let touchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    touchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <touchableComponent style={{flex: 1}} onPress={props.onPressFnc(props.id)}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
          <Text style={styles.textStyle} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </touchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },

  container: {
    flex: 1,
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },

  textStyles: {
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CategoryGrid;
