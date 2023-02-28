import React, { useEffect } from "react";
import Router from "./router";
import theme from "../shared/theme";
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from "styled-components";
import HookProvider from "./hooks";
import SplashScreen from "react-native-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { StatusBar, Text } from "react-native";

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
      {!loadedFonts ? <Text>Carregando</Text> : (
        <>
          <ThemeProvider theme={theme}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <HookProvider>
              <Router />
            </HookProvider>
          </ThemeProvider>
        </>
      )}
    </>
  );
}