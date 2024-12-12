import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/src/screens/home/index";
import Hourly from "@/src/screens/hourly/index";
import Map from "@/src/screens/map/index";
import Demo from "@/src/screens/haidh/demo";
import Daily from "@/src/screens/daily/index";
import More from "@/src/screens/more/index";
import Login from "@/src/screens/auth/login/index";
import DucPH from "@/src/screens/ducph/index";
import TienPD from "@/src/screens/tienpd";

import withAppLayout from "../components/layouts/WithAppLayout";
import { footerTabsMap } from "@/src/config/FooterTabs";

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name={footerTabsMap["home"].route}
          component={withAppLayout(Home)}
        />
        <Stack.Screen
          name={footerTabsMap["hourly"].route}
          component={withAppLayout(Hourly)}
        />
        <Stack.Screen
          name={footerTabsMap["daily"].route}
          component={withAppLayout(Daily)}
        />
        <Stack.Screen
          name={footerTabsMap["map"].route}
          component={withAppLayout(Map)}
        />
        <Stack.Screen
          name={footerTabsMap["more"].route}
          component={withAppLayout(More)}
        />
        <Stack.Screen name="ducph" component={withAppLayout(DucPH)} />
        <Stack.Screen name="demo" component={withAppLayout(Demo)} />
        <Stack.Screen name="tienpd" component={withAppLayout(TienPD)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
