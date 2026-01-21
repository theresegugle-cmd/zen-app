import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeScreen from "./src/screens/HomeScreen";
import ManifestScreen from "./src/screens/ManifestScreen";
import YogaScreen from "./src/screens/YogaScreen";
import CalmScreen from "./src/screens/CalmScreen";


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#F4EFEA",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen name="ZEN" component={HomeScreen} />
        <Tab.Screen name="Manifestér" component={ManifestScreen} />
        <Tab.Screen name="Yoga" component={YogaScreen} />
        <Tab.Screen name="Ro" component={CalmScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}