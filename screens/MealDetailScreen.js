import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Meal Detail Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
