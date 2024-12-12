import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Alert,
  Center,
  IconButton,
  Spacer,
  Pressable
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export enum AlertWeatherType {
  AcUnit = 1,
  Visibility = 2,
  Cloud = 3,
  Warning = 4
}
export type AlertWeather = {
  id: string;
  alertWeatherType: AlertWeatherType;
  color: string;
  backgroundColor: string;
  iconName: string;
  heading: string;
  description: string;
  isCollapse: boolean;
};
export type AlertWeatherProps = Array<{
  id: string;
  day: string;
  alertWeathers: Array<AlertWeather>;
}>;

export function AlertWeatherComponent({
  alertWeatherProps,
  updateCollapse
}: {
  alertWeatherProps: AlertWeatherProps;
  updateCollapse: any;
}) {
  return (
    <VStack space={4} p={4}>
      {alertWeatherProps.map((item, index) => (
        <Box key={item.id}>
          <Text paddingBottom={2}>{item.day}</Text>
          {item.alertWeathers.map((detail, index) => (
            <Box
              key={detail.id}
              borderWidth={1}
              borderColor={detail.color}
              borderRadius="md"
              p={4}
              bg={detail.backgroundColor}
              mt={2}
            >
              <Pressable onPress={() => updateCollapse(item.id, detail.id)}>
                <HStack alignItems="center" space={2}>
                  <Icon
                    as={MaterialIcons}
                    name={detail.iconName}
                    size="sm"
                    color={detail.color}
                  />
                  <Heading size="sm" color={detail.color}>
                    {detail.heading}
                  </Heading>
                  <Spacer />
                  <Icon
                    as={MaterialIcons}
                    name={
                      detail.isCollapse
                        ? "keyboard-arrow-down"
                        : "keyboard-arrow-up"
                    }
                    size="sm"
                    color={detail.color}
                  />
                </HStack>
              </Pressable>
              {detail.isCollapse && (
                <Text mt={2} paddingLeft={6} color={detail.color}>
                  {detail.description}
                </Text>
              )}
            </Box>
          ))}
        </Box>
      ))}
    </VStack>
  );
}
