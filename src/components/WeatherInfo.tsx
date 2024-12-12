import React, { useState } from 'react';
import { Box, VStack, HStack, Text, Icon, IconButton, Divider } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const WeatherCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Điều khiển mở rộng chi tiết

  const weatherData = [
    { label: 'Current conditions', value: 'Mostly sunny' },
    { label: 'Feels like', value: '6°' },
    { label: 'Precipitation', value: '0%' },
    { label: 'Humidity', value: '70%' },
    { label: 'Cloud cover', value: '30%' },
    { label: 'Dew point', value: '6°' },
    { label: 'Wind', value: '8 mph SE' },
    { label: 'Wind gusts', value: '5 mph' },
    { label: 'UV Index', value: '3 Moderate' },
    { label: 'Air quality', value: 'Very unhealthy' },
    { label: 'Sunrise', value: '06:14' },
    { label: 'Sunset', value: '20:01' },
  ];

  return (
    <Box
      borderWidth={1}
      borderColor="coolGray.200"
      borderRadius="lg"
      padding={4}
      backgroundColor="white"
      shadow={2}
      width="90%"
      alignSelf="center"
    >
      {/* Thông tin cơ bản */}
      <HStack justifyContent="space-between" alignItems="center" marginBottom={4}>
        <HStack space={6} alignItems="center">
          <Text fontSize="md" color={"rgba(90, 102, 114, 1)"} fontWeight="500">
            Now
          </Text>
          <HStack>
            <Icon as={Ionicons} name="partly-sunny" size="lg" color="yellow.500" />
            <Text marginLeft={1} fontSize="lg" fontWeight="500" color={"rgba(90, 102, 114, 1)"}>
              42°
            </Text>
          </HStack>
          <HStack alignItems="center" space={1}>
            <Icon as={Ionicons} name="water" size="sm" color="blue.500" />
            <Text fontSize="sm" fontWeight="500" color={"rgba(90, 102, 114, 1)"}>
              0%
            </Text>
          </HStack>
          <HStack alignItems="center" space={1}>
            <Icon as={Ionicons} name="cloud-outline" size="sm" color="coolGray.800" />
            <Text fontSize="sm" fontWeight="500" color={"rgba(90, 102, 114, 1)"}>
              0 SE
            </Text>
          </HStack>
        </HStack>
        <IconButton
          icon={<Ionicons color={'rgba(39, 115, 255, 1)'} name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} />}
          borderRadius="10"
          marginLeft={3}
          borderWidth={1}
          borderColor="coolGray.200"
          backgroundColor="coolGray.100"
          onPress={() => setIsExpanded(!isExpanded)}
        />
      </HStack>

      {/* Chi tiết thời tiết */}
      {isExpanded && (
        <VStack space={2}>
          {weatherData.map((item, index) => (
            <React.Fragment key={index}>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="sm" color="coolGray.600">
                  {item.label}
                </Text>
                <Text fontSize="sm" fontWeight="bold" color="coolGray.800">
                  {item.value}
                </Text>
              </HStack>
              {index < weatherData.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default WeatherCard;
