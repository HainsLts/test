import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, HStack, VStack, Slider, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const TimeSliderComponent: React.FC = () => {
  const [time, setTime] = useState<number>(12);

  const formatTime = (hour: number) => {
    const suffix = hour >= 12 ? "PM" : "AM";
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    return `${adjustedHour} ${suffix}`;
  };

  return (
    <Box
      borderWidth={1}
      borderColor="coolGray.100"
      borderRadius="lg"
      padding={4}
      backgroundColor="coolGray.50"
      shadow={2}
      width="95%"
      alignSelf="center"
    >
      <Box>
        <VStack alignItems="center" marginBottom={4}>
          <Text fontSize="md" fontWeight="bold" color="coolGray.800">
            May, 11, 2023
          </Text>
          <Text fontSize="sm" color="coolGray.600">
            2:04 PM Thursday
          </Text>
        </VStack>
      </Box>
      <HStack>
        <Box>
          <IconButton
            icon={<Ionicons name="play" size={20} color="white" />}
            backgroundColor="blue.500"
            borderRadius="10"
            marginLeft={0}
            size="sm"
          />
        </Box>

        <Box marginLeft={4} marginRight={2}>
          <HStack alignItems="center">
            <Slider
              flex={1}
              defaultValue={12}
              maxValue={18}
              step={1}
              value={time}
              onChange={(value) => setTime(value)}
            >
              <Slider.Track>
                <Slider.FilledTrack backgroundColor="blue.500" />
              </Slider.Track>
              <Slider.Thumb backgroundColor="blue.500" />
            </Slider>
          </HStack>
          <HStack>
            <Text fontSize="xs" fontWeight="bold" color="coolGray.600" marginRight={7}>6 AM</Text>
            <Text fontSize="xs" fontWeight="bold" color="coolGray.600" marginRight={7}>9 AM</Text>
            <Text fontSize="xs" fontWeight="bold" color="coolGray.600" marginRight={7}>12 PM</Text>
            <Text fontSize="xs" fontWeight="bold" color="coolGray.600" marginRight={7}>3 PM</Text>
            <Text fontSize="xs" fontWeight="bold" color="coolGray.600">6 PM</Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default TimeSliderComponent;
