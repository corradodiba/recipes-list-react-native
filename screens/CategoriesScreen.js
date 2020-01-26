import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";

import CATEGORIES from "../data/dummy-categories";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (categoryItem) => {
    const { item } = categoryItem;
    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() =>
          navigation.navigate("CategoryMeal", {
            categoryId: item.id
          })
        }
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      renderItem={renderCategoryItem}
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
  },
  categoryItem: {
    flex: 1
  }
});

export default CategoriesScreen;
