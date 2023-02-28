import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@modules/Home/screens";
import { Register } from "@modules/Register/screens";

const { Navigator, Screen } = createStackNavigator();

export default function BottomRouter() {
  return (
    <Navigator
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

    </Navigator>
  );
}
