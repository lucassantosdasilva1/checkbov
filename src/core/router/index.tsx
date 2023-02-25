import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomRouter from "./Bottom.router";

export default function Router() {
  return (
    <NavigationContainer>
      <BottomRouter />
    </NavigationContainer>
  );
}
