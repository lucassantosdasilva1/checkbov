import React, { useEffect } from "react";
// import Router from "./router";
// import theme from "@shared/theme";
// import HookProvider from "./hooks";
import { useFonts } from "expo-font";
import { Text } from "react-native";
// import { ThemeProvider } from "styled-components";
import SplashScreen from "react-native-splash-screen";

export default function App() {
  // const [loadedFonts] = useFonts({
  //   "Montserrat-Regular": require("@assets/fonts/Montserrat-Regular.ttf"),
  //   "Montserrat-Medium": require("@assets/fonts/Montserrat-Medium.ttf"),
  //   "Montserrat-Bold": require("@assets/fonts/Montserrat-Bold.ttf"),
  // });

  // if (!loadedFonts) return <></>;
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <Text>Hello new World</Text>
    // <ThemeProvider theme={theme}>
      // <HookProvider>
        // <Router />
      // </HookProvider>
    // </ThemeProvider>
  );
}