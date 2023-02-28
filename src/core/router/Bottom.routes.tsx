import React from "react";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
// import { Header } from "@modules/repositories/components/header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Home } from "../../modules/Home/screens/index";
import { Home } from "@modules/Home/screens";

// import Repositories from "@modules/repositories/screens";
// import Favorites from "@modules/favorites/screens";

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary_text,
        tabBarInactiveTintColor: theme.colors.terciary_text,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.secondary_background,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

    </Navigator>
  );
}
