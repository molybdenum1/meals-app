import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";

export const Categories = () => {
  return (
    <View>
      <Text>Categories</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <CategoryGridTile title={item.title} color={item.color} />
        )}
      />
    </View>
  );
};
