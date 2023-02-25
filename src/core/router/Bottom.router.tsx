import React from "react";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
// import { Header } from "@modules/repositories/components/header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@modules/Home/screens";

// import Repositories from "@modules/repositories/screens";
// import Favorites from "@modules/favorites/screens";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Repositories"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="star" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
