import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRouter from "./Stack.routes";

export default function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
