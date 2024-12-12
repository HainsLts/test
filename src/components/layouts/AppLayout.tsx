import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Location from "./Location/Location";

import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import SegmentControl from "@/src/components/shared/SegmentControl";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const { type, actions } = useSelector((state: RootState) => state.header);

  return (
    <View style={styles.container}>
      <Header type={type} actions={actions} />
      <Location />
      <SegmentControl />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 10
  }
});

export default AppLayout;
