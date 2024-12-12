import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppImage from "@/src/components/shared/Image";
import Icon from "@/src/components/shared/Icon";
import { HeaderType } from "./HeaderType";
import { Button, Box } from "native-base";
import { useTheme } from "@/src/context/ThemeContext";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

const Header = () => {
  const { currentTheme } = useTheme();
  const headerType = useSelector((state: RootState) => state.header.type);
  return (
    <View style={{ paddingTop: 50, backgroundColor: "#FFFFFF" }}>
      {headerType == HeaderType.Default && (
        <Box p="5" style={[styles.container, styles.flexCenter]}>
          <Text style={styles.title}>Default Layout</Text>
        </Box>
      )}

      {headerType == HeaderType.LogoWithButton && (
        <Box p="5" style={[styles.container, styles.flexBetween]}>
          <AppImage name="logo" style={styles.logo} />
          <Text style={styles.title}>Logo With Button</Text>
          <Icon
            name="fbSetting"
            width={24}
            height={24}
            fill={currentTheme.notActiveTab}
          />
        </Box>
      )}

      {headerType == HeaderType.BackButtonWithAction && (
        <Box p="5" style={[styles.container, styles.flexBetween]}>
          <View style={[styles.container, styles.flexCenter]}>
            <Icon
              name="fbBackArrow"
              width={24}
              height={24}
              fill={currentTheme.notActiveTab}
            />
            <Text>Back</Text>
          </View>
          <Text style={styles.title}>Back With Button</Text>
          <Box shadow="9" p="4" py="3" bg="white" rounded="md">
            <Icon
              name="fbPlus"
              width={24}
              height={24}
              fill={currentTheme.notActiveTab}
            />
          </Box>
        </Box>
      )}
      {headerType == HeaderType.BackWithoutAction && (
        <Box p="5" style={[styles.container, styles.flexBetween]}>
          <View style={[styles.container, styles.flexCenter]}>
            <Icon
              name="fbBackArrow"
              width={24}
              height={24}
              fill={currentTheme.notActiveTab}
            />
            <Text>Back</Text>
          </View>
          <Text style={styles.title}>Back Without Action</Text>
          <View></View>
        </Box>
      )}
      {headerType == HeaderType.CancelSave && (
        <Box p="5" style={[styles.container, styles.flexBetween]}>
          <Button size="md" variant="subtle" colorScheme="secondary">
            Cancel
          </Button>
          <Text style={styles.title}>Cancel Save</Text>
          <Button variant="subtle" size="md">
            Save
          </Button>
        </Box>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF"
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  flexBetween: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  logo: {
    width: 80,
    height: 32
  },
  padding20: {
    padding: 20
  }
});

export default Header;
