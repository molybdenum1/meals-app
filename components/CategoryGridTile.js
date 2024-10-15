import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

export const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
