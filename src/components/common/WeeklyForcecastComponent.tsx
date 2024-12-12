import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Center,
  View,
  Icon,
  ScrollView
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export type InforWeather = {
  temp: string;
  humidity: string;
  iconName: string;
  linearColor: [string, string];
  colorName: string;
  humidityColor: string
};
export type WeeklyForcecastProps = Array<{
  id: string;
  day: string;
  moringInforWeather: InforWeather;
  eveningInforWeather: InforWeather;
}>;
export default function WeeklyForcecastComponent({
  weeklyForcecastProps
}: {
  weeklyForcecastProps: WeeklyForcecastProps;
}) {
  return (
    <ScrollView horizontal={true}>
      <HStack space={2}>
        {weeklyForcecastProps.map((item) => (
          <Box key={item.id}>
            <Box
              shadow={2}
              width="104px"
              height="80px"
              justifyContent="center"
              alignItems="center"
            >
              <LinearGradient
                colors={item.moringInforWeather.linearColor}
                start={[0, 0]}
                end={[0, 1]}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8
                }}
              >
                <VStack space={1} alignItems="center">
                  <Text
                    style={{
                      fontSize: 14,
                      color: item.moringInforWeather.colorName
                    }}
                  >
                    ToDay
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name="cloud"
                    size="sm"
                    color={"amber.200"}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: item.moringInforWeather.colorName
                    }}
                  >
                    42 <Text color={item.moringInforWeather.humidityColor}> / 0</Text>
                  </Text>
                </VStack>
              </LinearGradient>
            </Box>
            <Box
              shadow={2}
              width="104px"
              height="80px"
              justifyContent="center"
              alignItems="center"
            >
              <LinearGradient
                colors={item.eveningInforWeather.linearColor}
                start={[0, 0]}
                end={[0, 1]}
                style={{
                  width: "100%",
                  height: "100%",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8
                }}
              >
                <VStack space={1} alignItems="center">
                  <Text
                    style={{
                      fontSize: 14,
                      color: item.eveningInforWeather.colorName
                    }}
                  >
                    ToDay
                  </Text>
                  <Icon
                    as={MaterialIcons}
                    name="cloud"
                    size="sm"
                    color={"amber.200"}
                  />
                  <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
                    39
                    <Text color="#AFB8C0"> / 0</Text>
                  </Text>
                </VStack>
              </LinearGradient>
            </Box>
          </Box>
        ))}
      </HStack>
    </ScrollView>
  );
}
