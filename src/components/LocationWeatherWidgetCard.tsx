import React from 'react';
import { NativeBaseProvider, Box, Text, HStack, VStack, Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface WeatherCardProps {
  temperature?: string;
  status?: string;
  precipitation?: string;
  humidity?: string;
  wind?: string;
  onDetailsPress?: () => void;
  saved?: boolean;
}

const LocationWeatherWidgetCard: React.FC<WeatherCardProps> = ({
  temperature = '10F',
  status,
  precipitation = '0%',
  humidity = '70%',
  wind = 'SE 8 mph',
  onDetailsPress,
  saved = true,
}) => {
  return (
    <Box
      borderWidth={1}
      borderColor="coolGray.200"
      borderRadius="lg"
      shadow={2}
      padding={4}
      backgroundColor="white"
      width="70%"
      alignSelf="center"
    >
      {/* Header */}
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="md" fontWeight="600" color="coolGray.800">
          Location
        </Text>
        {saved && (
          <HStack padding="2" borderRadius="12" backgroundColor="rgba(213, 250, 241, 1)" alignItems="center" space={2}>
            <Icon as={Ionicons} name="checkmark-circle" color="green.500" size="sm" />
            <Text fontSize="xs" color="green.500">
              saved
            </Text>
          </HStack>
        )}
      </HStack>

      {/* Temperature and Weather Icon */}
      <HStack alignItems="center" marginTop={2}>
        <Icon as={Ionicons} name="partly-sunny" size="lg" color="orange.400" />
        <Text fontSize="3xl" fontWeight="400" color="coolGray.800" marginLeft={2}>
          {temperature}
        </Text>
      </HStack>

      {/* Details Row */}
      <HStack justifyContent="space-between" alignItems="center" marginTop={4}>
        <VStack alignItems="center">
          <Icon as={Ionicons} name="water" size="sm" color="blue.500" />
          <Text fontSize="sm" color="coolGray.600">
            {precipitation}
          </Text>
        </VStack>
        <VStack alignItems="center">
          <Icon as={Ionicons} name="rainy" size="sm" color="blue.500" />
          <Text fontSize="sm" color="coolGray.600">
            {humidity}
          </Text>
        </VStack>
        <VStack alignItems="center">
          <Icon as={Ionicons} name="cloud-outline" size="sm" color="blue.500" />
          <Text fontSize="sm" color="coolGray.600">
            {wind}
          </Text>
        </VStack>
      </HStack>

      {/* View Details Button */}
      <Button
        variant="outline"
        colorScheme="blue"
        borderRadius="15"
        marginTop={4}
        onPress={onDetailsPress}
        leftIcon={<Icon as={Ionicons} name="arrow-forward-outline" size="sm" />}
      >
        View details
      </Button>
    </Box>
  );
};

export default LocationWeatherWidgetCard;
