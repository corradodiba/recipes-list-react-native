import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";

import CATEGORIES from "../data/dummy-categories";
import CategoryCard from "../components/CategoryCard";

const CategoriesScreen = ({ navigation }) => {
  renderCategoryCard = ({ item }) => {
    return (
      <CategoryCard
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeal", {
            categoryId: item.id
          });
        }}
      />
    );
  };

  return (
    <FlatList
      renderItem={renderCategoryCard}
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
    />
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
