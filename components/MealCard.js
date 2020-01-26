import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const MealCard = ({ item, color }) => {
  return (
    <TouchableOpacity style={[styles.cardWrapper, { backgroundColor: color }]}>
      <View style={[{ flexDirection: "row" }, styles.titleRow]}>
        <ImageBackground source={{ uri: item.imageUrl }} style={styles.cover}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
        </ImageBackground>
      </View>
      <View style={[{ flexDirection: "row" }, styles.detailsRow]}>
        <Text style={styles.textDetails}>{item.duration}</Text>
        <Text style={styles.textDetails}>{item.complexity.toUpperCase()}</Text>
        <Text style={styles.textDetails}>
          {item.affordability.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: 200,
    backgroundColor: Colors.primary,
    margin: 10,
    borderRadius: 8,
    overflow: "hidden"
  },
  titleRow: {
    height: "85%"
  },
  title: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10
  },
  cover: {
    height: "100%",
    width: "100%"
  },
  detailsRow: {
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 5
  },
  textDetails: {
    fontWeight: "500",
    color: "white"
  }
});

export default MealCard;
