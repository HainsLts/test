import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import React from "react";
import { globalStyles } from "@/src/utils/Styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/src/types/navigation";
import { footerTabsMap } from "@/src/config/FooterTabs";

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View
      style={[
        globalStyles.Container,
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center"
        }
      ]}
    >
      <Text>Demo Baron Mobile</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate(
            footerTabsMap["home"].route as keyof RootStackParamList
          )
        }
      />
      <Button title="HaiDH" onPress={() => navigation.navigate("demo")} />
      <Button title="DucPH" onPress={() => navigation.navigate("ducph")} />
      <Button title="TienPD" onPress={() => navigation.navigate("tienpd")} />
    </View>
  );
}
