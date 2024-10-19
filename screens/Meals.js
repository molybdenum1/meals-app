import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";

export const Meals = ({ route, navigation }) => {
  const { catId } = route.params;
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.indexOf(catId)
  );

  const renderMealItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("Meal", { mealId: itemData.item.id  })
    }
    return <MealItem item={itemData.item} handlePress={handlePress} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <Text>MEALS EPTA {catId} </Text>
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
