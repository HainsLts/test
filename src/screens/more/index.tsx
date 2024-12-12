import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TestAlertWeatherComponent from "@/src/components/common/TestAlertWeatherComponent";
import TestDailyComponent from "@/src/components/common/TestDailyComponent";
import TestRadarComponent from "@/src/components/common/TestRadarComponent";
import TestWeeklyForcecastComponent from "@/src/components/common/TestWeeklyForcecastComponent";
import TestDayForcecastComponent from "@/src/components/common/TestDayForcecastComponent";
import { Divider } from "native-base";
import { useDispatch } from "react-redux";
import { HeaderType } from "@/src/components/layouts/Header/HeaderType";
import { setHeaderType } from "@/src/store/slices/headerSlice";
import { useIsFocused } from "@react-navigation/native";
export default function More() {
  const dispatch = useDispatch();
  const headerType = HeaderType.CancelSave;
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      dispatch(setHeaderType(headerType));
    }
  }, [dispatch, isFocused, headerType]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <TestAlertWeatherComponent />
        <Divider
          bg="emerald.500"
          thickness="2"
          mx="2"
          orientation="horizontal"
          mb={3}
          mt={3}
        ></Divider>
        <TestDailyComponent />
        <Divider
          bg="emerald.500"
          thickness="2"
          mx="2"
          orientation="horizontal"
          mb={3}
          mt={3}
        ></Divider>
        <TestRadarComponent />
        <Divider
          bg="emerald.500"
          thickness="2"
          mx="2"
          orientation="horizontal"
          mb={3}
          mt={3}
        ></Divider>
        <TestWeeklyForcecastComponent />
        <Divider
          bg="emerald.500"
          thickness="2"
          mx="2"
          orientation="horizontal"
          mb={3}
          mt={3}
        ></Divider>
        <TestDayForcecastComponent />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
