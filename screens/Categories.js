import React from "react";
import { Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";

export const Categories = ({ navigation }) => {
  const renderListItem = (item) => {
    const handlePress = () => {
      navigation.navigate("NameOfMeals", { catId: item.item.id });
    };
    return (
    <CategoryGridTile
      title={item.item.title}
      color={item.item.color}
      onPress={handlePress}
    />
  );}

  return (
    <View>
      <Text>Categories</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        numColumns={2}
      />
    </View>
  );
};
