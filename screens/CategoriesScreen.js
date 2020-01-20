import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Categories Screen</Text>
      <Button
        title="Go to Category Meal"
        onPress={() => navigation.navigate("CategoryMeal")}
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

export default CategoriesScreen;
