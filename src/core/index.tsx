import React, { useEffect } from "react";
import Router from "./router";
import theme from "../shared/theme";
// import HookProvider from "./hooks";
import { ThemeProvider } from "styled-components";
import SplashScreen from "react-native-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { Text } from "react-native";

export default function App() {
  const [loadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <>
      {!loadedFonts ? null : (
        <>
          <ThemeProvider theme={theme}>
      {/* // <HookProvider> */}
            <Router />
      {/* // </HookProvider> */}
          </ThemeProvider>
        </>
      )}
    </>
  );
}