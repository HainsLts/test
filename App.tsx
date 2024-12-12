import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import "react-native-gesture-handler";
import MainNavigator from "@/src/navigation/MainNavigator";
import { ThemeProvider } from "@/src/context/ThemeContext";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <ThemeProvider>
          <MainNavigator />
        </ThemeProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
