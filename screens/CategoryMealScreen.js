import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import MealCard from "../components/MealCard";

import CATEGORIES from "../data/dummy-categories";
import MEALS from "../data/dummy-meals";

const getSelectedCategory = (categoryId) => {
  return CATEGORIES.find(({ id }) => id === categoryId);
};

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = getSelectedCategory(categoryId);

  const displayedMeals = MEALS.filter(
    ({ categoryIds }) => categoryIds.indexOf(categoryId) !== -1
  );

  const renderMealItem = ({ item }) => {
    return <MealCard color={selectedCategory.color} item={item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        style={styles.mealsList}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = getSelectedCategory(categoryId);

  return {
    title: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  mealsList: {
    width: "100%"
  }
});

export default CategoryMealScreen;
