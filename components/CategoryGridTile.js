import React from "react";
import { Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';


export const CategoryGridTile = ({ title, color, onPress }) => {
  const navigation = useNavigation();
  
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttomItem,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerItem}>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttomItem: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerItem: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
