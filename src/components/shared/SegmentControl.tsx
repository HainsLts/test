import React, { useState, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { Box, HStack, Pressable, Text } from "native-base";

export default function SegmentControl() {
  const [selected, setSelected] = useState("Hourly");
  const sliderAnim = useRef(new Animated.Value(0)).current;
  const [tabWidth, setTabWidth] = useState(0);
  const options = ["Now", "Hourly", "Daily"];

  const handlePress = (option: string, index: number) => {
    setSelected(option);

    Animated.spring(sliderAnim, {
      toValue: index * tabWidth,
      useNativeDriver: false
    }).start();
  };

  return (
    <Box bg="white" p={4} borderRadius="lg" shadow={2}>
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="full"
        bg="gray.100"
      >
        {/* Sliding Bar */}
        <Animated.View
          style={[
            styles.slider,
            {
              width: tabWidth,
              transform: [{ translateX: sliderAnim }]
            }
          ]}
        />
        {/* Tabs */}
        <HStack
          justifyContent="space-between"
          alignItems="center"
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setTabWidth(width / options.length);
          }}
        >
          {options.map((option, index) => (
            <Pressable
              key={option}
              onPress={() => handlePress(option, index)}
              flex={1}
              alignItems="center"
              py={2}
            >
              <Text
                fontWeight="bold"
                color={selected === option ? "white" : "gray.500"}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  slider: {
    position: "absolute",
    height: "100%",
    backgroundColor: "#3B82F6",
    borderRadius: 50
  }
});
