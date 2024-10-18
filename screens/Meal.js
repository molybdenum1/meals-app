import React, { useLayoutEffect, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";

export const Meal = ({ route, navigation }) => {
  const { mealId } = route.params;
  const MEAL = MEALS.filter((mealItem) => mealItem.id === mealId)[0];

  const handlerPress = () => {};

  useEffect(() => {
    navigation.setOptions({
      headerRigth: () => {
        return <Button title="Tap me" onPress={handlerPress} />;
      },
    });
  }, [navigation, handlerPress]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image source={{ uri: MEAL.imageUrl }} height={250} />
        <View style={styles.mealTitleContainer}>
          <Text style={styles.mealTitle}>Meal - {MEAL.title} </Text>
        </View>
        <View style={styles.mealInfoContainer}>
          <View style={styles.mealRowInfoContainer}>
            <Text style={styles.mealRowInfoText}>
              Duration: {MEAL.duration} min
            </Text>
            <Text style={styles.mealRowInfoText}>
              Complexity: {MEAL.complexity === "simple" ? "⚡" : "⚡⚡⚡"}
            </Text>
            <Text style={styles.mealRowInfoText}>
              Affordability: {MEAL.affordability === "affordable" ? "$" : "$$$"}
            </Text>
          </View>
          <View style={styles.mealRowInfoContainer}>
            {MEAL.isGlutenFree && (
              <Text style={styles.mealRowInfoText}>Gluten Free</Text>
            )}
            {MEAL.isLactoseFree && (
              <Text style={styles.mealRowInfoText}>Lactose Free</Text>
            )}
            {MEAL.isVegan && <Text style={styles.mealRowInfoText}>Vegan</Text>}
            {MEAL.isVegetarian && (
              <Text style={styles.mealRowInfoText}>Vegaterian</Text>
            )}
          </View>
        </View>
        <View style={styles.mealTitleContainer}>
          <Text style={styles.mealTitle}>Ingredients</Text>
        </View>
        <View horizontal={true} style={styles.ingredientsContainer}>
          {MEAL &&
            MEAL.ingredients.map((item) => (
              <View key={item} style={styles.ingredientText}>
                <Text>{`${item}`}</Text>
              </View>
            ))}
        </View>
        <View style={styles.mealTitleContainer}>
          <Text style={styles.mealTitle}>Steps</Text>
        </View>
        <View style={styles.stepsContainer}>
          {MEAL &&
            MEAL.steps.map((step) => (
              <View style={styles.stepContainer}>
                <Text style={styles.stepTextContainer}>{`- ${step}`}</Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  mealTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  mealInfoContainer: {
    rowGap: 10,
    marginTop: 10,
  },
  mealRowInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
  },
  mealRowInfoText: {
    backgroundColor: "#EDDFE0",
    padding: 10,
    borderRadius: 25,
  },
  ingredientsContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    rowGap: 20,
    alignItems: "center",
  },
  ingredientText: {
    backgroundColor: "#E7CCCC",
    marginTop: 5,
    padding: 10,
    borderRadius: 25,
    width: 300,
    alignItems: "center",
  },
  stepsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 40,
  },
  stepContainer: {
    marginVertical: 2,
  },
  stepTextContainer: {
    textAlign: "justify",
  },
});
