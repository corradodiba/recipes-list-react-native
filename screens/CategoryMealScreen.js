import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import CATEGORIES from "../data/dummy-categories";
import MEALS from "../data/dummy-meals";

const renderMealItem = ({ item }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    ({ categoryIds }) => categoryIds.indexOf(categoryId) !== -1
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
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
