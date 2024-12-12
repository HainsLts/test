import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { setHeaderType } from "@/src/store/slices/headerSlice";
import { useDispatch } from "react-redux";
import { HeaderType } from "@/src/components/layouts/Header/HeaderType";
import { useIsFocused } from "@react-navigation/native";

export default function Hourly() {
  const dispatch = useDispatch();
  const headerType = HeaderType.LogoWithButton;
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      dispatch(setHeaderType(headerType));
    }
  }, [dispatch, isFocused, headerType]);
  return (
    <View style={styles.container}>
      <Text>Hourly</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
