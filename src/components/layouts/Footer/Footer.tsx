import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { footerTabsConfig } from "@/src/config/FooterTabs";
import { RootStackParamList } from "@/src/types/navigation";
import { useTheme } from "@/src/context/ThemeContext";
import { useRoute } from "@react-navigation/native";
import Icon from "@/src/components/shared/Icon";

const Footer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { currentTheme } = useTheme();
  const route = useRoute();
  const activeRoute = route.name;
  return (
    <View style={[styles.container]}>
      {footerTabsConfig
        .filter((tab) => tab.visible)
        .map((tab, index) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() =>
              navigation.navigate(tab.route as keyof RootStackParamList)
            }
          >
            <Icon
              name={tab.icon}
              width={24}
              height={24}
              fill={
                activeRoute === tab.route
                  ? currentTheme.activeTabColor
                  : currentTheme.notActiveTab
              }
            />
            <Text
              style={{
                color:
                  activeRoute === tab.route
                    ? currentTheme.activeTabColor
                    : currentTheme.notActiveTab
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 94,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-around",
    alignItems: "center"
  },
  tab: {
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 16
  }
});

export default Footer;
