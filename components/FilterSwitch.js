import React from "react";
import { View, StyleSheet, Text, Platform, Switch } from "react-native";
import Color from "../constants/Color";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterColumn}>
      <Text style={styles.textStyle}>{props.label}</Text>
      <Switch
        thumbColor={Platform.OS === "android" || "web" ? Color.primary : ""}
        trackColor={{ true: Color.primary, false: "#ccc" }}
        value={props.stateValue}
        onValueChange={props.onChangeFnc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    padding: 5,
    marginBottom: 20,
  },

  textStyle: {
    fontSize: 15,
  },
});

export default FilterSwitch;
