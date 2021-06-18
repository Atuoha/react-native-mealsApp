import React from "react";
import { Platform } from "react-native";
// import { HeaderButton } from "react-navigation-buttons";
import Colors from "../constants/Color";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={23}
      IconComponent={Ionicons}
      color={Platform.OS === "ios" ? Colors.accent : "white"}
    />
  );
};

export default CustomHeaderButton;
