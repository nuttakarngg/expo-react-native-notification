import React from "react";
import PushNotification from "./screens/PushNotification";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigation = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen name="Home" component={HomeScreen} />
        <StackNavigation.Screen
          name="Notification"
          component={PushNotification}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
