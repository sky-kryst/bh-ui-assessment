import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BlankScreen, Home } from "../../screens";

const Tab = createBottomTabNavigator();

export const BottomsTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Videos" component={BlankScreen} />
      <Tab.Screen name="Rankings" component={BlankScreen} />
      <Tab.Screen name="Profile" component={BlankScreen} />
      <Tab.Screen name="Notifications" component={BlankScreen} />
    </Tab.Navigator>
  );
};
