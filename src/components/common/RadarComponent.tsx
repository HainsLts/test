import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Pressable,
  Spacer
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export type Radar = {
  id: string;
  iconName: string;
  heading: string;
  description: string;
  isCollapse: boolean;
};
export type RadarProps = Array<Radar>;

export function RadarComponent({
  radarProps,
  updateCollapse
}: {
  radarProps: RadarProps;
  updateCollapse: any;
}) {
  return (
    <VStack space={4} p={4}>
      {radarProps.map((item) => (
        <Box
          key={item.id}
          borderWidth={1}
          borderColor="#F0F2F5"
          borderRadius="md"
          p={4}
          bg="#FAFBFE"
        >
          <Pressable onPress={() => updateCollapse(item.id)}>
            <HStack alignItems="center" space={2}>
              <Icon
                as={MaterialIcons}
                name={item.iconName}
                size="sm"
                color={item.isCollapse ? "#1B51B3" : "#5A6672"}
              />
              <Heading
                fontSize={14}
                color={item.isCollapse ? "#1B51B3" : "#5A6672"}
              >
                {item.heading}
              </Heading>
              <Spacer />
              <Icon
                as={MaterialIcons}
                name={
                  item.isCollapse ? "keyboard-arrow-down" : "keyboard-arrow-up"
                }
                size="sm"
                color={item.isCollapse ? "#1B51B3" : "#5A6672"}
              />
            </HStack>
          </Pressable>
          {item.isCollapse && (
            <Text mt={2} paddingLeft={6} color="#5A6672">
              {item.description}
            </Text>
          )}
        </Box>
      ))}
    </VStack>
  );
}
