import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Categories } from "./screens/Categories";
import { Favorites } from "./screens/Favorites";
import { Meals } from "./screens/Meals";
import { Meal } from "./screens/Meal";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{ title: "All Categories", drawerIcon: ({color, size}) => (<Ionicons name="home" />)}}
      />
      <Drawer.Screen name="Favorites" component={Favorites} options={{ drawerIcon: ({color, size}) => (<Ionicons name="star" />)}} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealCategories"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="NameOfMeals" component={Meals} />
          <Stack.Screen name="Meal" component={Meal} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
