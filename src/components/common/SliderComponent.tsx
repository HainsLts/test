import React from "react";
import {
  Box,
  VStack,
  HStack,
  Slider,
  NativeBaseProvider
} from "native-base";

interface SliderChartProps {
  value: number;
}

const SliderChart: React.FC<SliderChartProps> = ({ value }) => {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        bg="coolGray.100"
        padding={5}
      >
        <VStack space={4} alignItems="flex-start">
            <HStack alignItems="center" space={4}>
              <Slider value={value} colorScheme="green">
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
            </HStack>
        
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default SliderChart;
