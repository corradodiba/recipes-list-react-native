import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import CATEGORIES from "../data/dummy-categories";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => categoryId === category.id
  );
  return (
    <View style={styles.screen}>
      <Text>This is the Category Meal Screen ({selectedCategory.title})</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => navigation.navigate("MealDetail")}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (category) => categoryId === category.id
  );

  return {
    title: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
