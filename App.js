import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories } from "./screens/Categories";
import { Meals } from "./screens/Meals";

const Stack = createNativeStackNavigator();


export default function App() {
  return <>
    <StatusBar style="light"/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealCategories" component={Categories}/>
        <Stack.Screen name="NameOfMeals" component={Meals}/>
      </Stack.Navigator>
    </NavigationContainer>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
});
