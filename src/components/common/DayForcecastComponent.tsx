import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  ScrollView
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export type InforDayWeather = {
  id: string,
  linearColor: [string, string],
  iconName: string,
  hour: string,
  temp: string,
  humidity: string,
  colorName: string,
  humidityColor: string
};
export type DayForcecastProps = Array<InforDayWeather>;
export default function DayForcecastComponent({
  dayForcecastProps
}: {
  dayForcecastProps: DayForcecastProps;
}) {
  return (
    <ScrollView horizontal={true}>
      <HStack space={2}>
        {dayForcecastProps.map((item) => (
          <Box key={item.id}>
            <Box
              shadow={2}
              width="88px"
              height="88px"
              justifyContent="center"
              alignItems="center"
            >
              <LinearGradient
                colors={item.linearColor}
                start={[0, 0]}
                end={[0, 1]}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
                }}
              >
                <VStack space={1} alignItems="center">
                  <Icon
                    as={MaterialIcons}
                    name="cloud"
                    size="sm"
                    color={"amber.200"}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: item.colorName
                    }}
                  >
                    ToDay
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: item.colorName
                    }}
                  >
                    42{" "}
                    <Text color={item.humidityColor}>
                      {" "}
                      / 0
                    </Text>
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
