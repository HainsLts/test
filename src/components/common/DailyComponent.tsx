import { MaterialIcons, Entypo } from "@expo/vector-icons";
import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  VStack,
  Text
} from "native-base";
import React from "react";
import { Pressable } from "react-native";

export enum TemperatureType {
  Temperature = 1,
  Humidity = 2,
  WsDirection = 3
}
export type Temperature = {
  id: string;
  iconName: string;
  value: string;
  temperatureType: TemperatureType;
};
// Edit
export type TemperatureMix = {
  id: string;
  isCollapse: boolean;
  Temperatures: Array<Temperature>;
  content: {
    heading: string;
    description: string;
  };
};
export type DailyForecastProps = Array<{
  id: string;
  day: {
    dayName: string;
    date: string;
  };
  temperature1: TemperatureMix;
  temperature2: TemperatureMix;
}>;
export function DailyComponent({
  forecasts,
  updateCollapse
}: {
  forecasts: DailyForecastProps;
  updateCollapse: any;
}) {
  return (
    <VStack>
      {forecasts.map((forecast, index) => (
        <Box key={forecast.id}>
          <Box id="1" paddingBottom={2}>
            <HStack justifyContent="space-between">
              <Text>{forecast.day.dayName}</Text>
              <Text>{forecast.day.date}</Text>
            </HStack>
          </Box>

          <Box
            id="2"
            background="white"
            borderTopLeftRadius={8}
            borderTopRightRadius={8}
            borderWidth={1}
            borderColor="gray.300"
            shadow={2}
          >
            <Pressable onPress={() => updateCollapse(forecast.id, true)}>
              <HStack justifyContent="space-between" height={52} padding={2}>
                {/* wether */}
                {forecast.temperature1.Temperatures.map((temp, index) => (
                  <HStack
                    space={2}
                    key={`${forecast.id}-${temp.id}-${temp.temperatureType}`}
                  >
                    <Center>
                      <Icon
                        as={Entypo}
                        name={temp.iconName}
                        size={10}
                        color="coolGray.800"
                        _dark={{
                          color: "warmGray.50"
                        }}
                      />
                    </Center>
                    <Center>{temp.value}</Center>
                  </HStack>
                ))}
                <HStack>
                  <Center>
                    <IconButton
                      onPress={() => updateCollapse(forecast.id, true)}
                      icon={
                        <Icon
                          as={MaterialIcons}
                          name={
                            forecast.temperature1.isCollapse
                              ? "keyboard-arrow-down"
                              : "keyboard-arrow-up"
                          }
                        />
                      }
                      bg="white"
                      _icon={{
                        size: "sm",
                        color: "gray.500"
                      }}
                      _pressed={{
                        bg: "gray.200"
                      }}
                      size="md"
                      shadow={1}
                    />
                  </Center>
                </HStack>
              </HStack>
            </Pressable>
          </Box>
          {forecast.temperature1.isCollapse && (
            <Box paddingLeft={4}>
              <Heading fontSize={16} paddingBottom={3} paddingTop={3}>
                {forecast.temperature1.content.heading}
              </Heading>
              <Text fontWeight="400" paddingBottom={2}>
                {forecast.temperature1.content.description}
              </Text>
            </Box>
          )}
          {/* Box2 */}
          <Box
            id="2"
            borderBottomLeftRadius={8}
            borderBottomRightRadius={8}
            borderWidth={1}
            shadow={2}
            backgroundColor="#0D2B54"
          >
            <Pressable onPress={() => updateCollapse(forecast.id, false)}>
              <HStack
                justifyContent="space-between"
                height={52}
                color="white"
                padding={2}
              >
                {/* wether */}
                {forecast.temperature2.Temperatures.map((temp, index) => (
                    <HStack
                      space={2}
                      key={`${forecast.id}-${temp.id}-${temp.temperatureType}`}
                    >
                      <Center>
                        <Icon
                          as={Entypo}
                          name="app-store"
                          size={10}
                          color="white"
                          _dark={{
                            color: "warmGray.50"
                          }}
                        />
                      </Center>
                      <Center>
                        <Text color="white">{temp.value}</Text>
                      </Center>
                    </HStack>
                ))}
                <HStack>
                  <Center>
                    <IconButton
                      onPress={() => updateCollapse(forecast.id, false)}
                      icon={
                        <Icon
                          as={MaterialIcons}
                          name={
                            forecast.temperature2.isCollapse
                              ? "keyboard-arrow-down"
                              : "keyboard-arrow-up"
                          }
                        />
                      }
                      bg="#115B7C"
                      _icon={{
                        size: "sm",
                        color: "gray.500"
                      }}
                      _pressed={{
                        bg: "gray.200"
                      }}
                      size="md"
                      shadow={1}
                    />
                  </Center>
                </HStack>
              </HStack>
            </Pressable>
          </Box>
          {forecast.temperature2.isCollapse && (
            <Box paddingLeft={4}>
              <Heading fontSize={16} paddingBottom={3} paddingTop={3}>
                {forecast.temperature2.content.heading}
              </Heading>
              <Text fontWeight="400" paddingBottom={2}>
                {forecast.temperature2.content.description}
              </Text>
            </Box>
          )}
        </Box>
      ))}
    </VStack>
  );
}
