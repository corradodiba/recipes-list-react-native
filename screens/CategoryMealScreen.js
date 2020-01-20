import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Category Meal Screen</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => navigation.navigate("MealDetail")}
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

export default CategoryMealScreen;
