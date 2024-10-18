import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

export const MealItem = ({ item, handlePress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={{flex: 1}}
        android_ripple={{color: '#ccc'}}
        onPress={handlePress}
      >
        <Image
          source={{ uri: item.imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 200,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemTextContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  itemText: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    marginVertical: 6,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
