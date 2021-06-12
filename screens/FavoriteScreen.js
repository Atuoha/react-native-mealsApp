import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
