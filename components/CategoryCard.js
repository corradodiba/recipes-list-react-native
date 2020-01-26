import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const CategoryCard = ({ title, color, onSelect }) => {
  let CustomTouchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version <= 21) {
    CustomTouchable = TouchableNativeFeedback;
  }

  return (
    <CustomTouchable
      style={[styles.categoryItem, { backgroundColor: color }, styles.shadow]}
      onPress={onSelect}
    >
      <Text style={styles.title}>{title}</Text>
    </CustomTouchable>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    margin: 10
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    elevation: 4
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  }
});

export default CategoryCard;
