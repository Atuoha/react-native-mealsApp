import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const FavoriteScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>FavoriteScreen</Text>

      <Button title="move to mealscat" onPress={()=> navigation.navigate('Categories')} />
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
