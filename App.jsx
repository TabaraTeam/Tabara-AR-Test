import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/home/HomeScreen";
import ARScreenNavigation from "./app/navigations/ARScreenNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AR" component={ARScreenNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
