import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export const MealItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
