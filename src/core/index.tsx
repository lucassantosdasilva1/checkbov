import React, { useEffect } from "react";
import Router from "./router";
import theme from "../shared/theme";
// import HookProvider from "./hooks";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import SplashScreen from "react-native-splash-screen";
import {
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

export default function App() {
  const [loadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!loadedFonts) return <></>;
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* // <HookProvider> */}
        <Router />
      {/* // </HookProvider> */}
    </ThemeProvider>
  );
}