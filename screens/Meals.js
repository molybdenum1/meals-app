import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";

export const Meals = ({ route }) => {
  const { mealId } = route.params;
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.indexOf(mealId)
  );

  const renderMealItem = (itemData) => {
    return <MealItem item={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <Text>MEALS EPTA {mealId} </Text>
      <FlatList
        data={displayedMeals}
        key={(item) => item.id}
        renderItem={renderMealItem}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
