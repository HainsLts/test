import React from 'react';
import { NativeBaseProvider, Box, VStack, HStack, Text, Image, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const SponsorsCard: React.FC = () => {
  const sponsors = [
    { name: 'State Farm', logo: 'https://via.placeholder.com/150x80.png?text=State+Farm', id: 1 },
    { name: 'The North Face', logo: 'https://via.placeholder.com/150x80.png?text=The+North+Face', id: 2 },
    { name: 'Patagonia', logo: 'https://via.placeholder.com/150x80.png?text=Patagonia', id: 3 },
    { name: 'Tripadvisor', logo: 'https://via.placeholder.com/150x80.png?text=Tripadvisor', id: 4 },
  ];

  return (
    <NativeBaseProvider>
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
        <HStack justifyContent="space-between" alignItems="center" marginBottom={3}>
          <Text fontSize="sm" fontWeight="500" color="rgba(90, 102, 114, 1)">
            SPONSORS
          </Text>
          <IconButton
            icon={<Ionicons color={'rgba(39, 115, 255, 1)'} name="chevron-forward" size={20} />}
            borderRadius="10"
            backgroundColor="coolGray.50"
            borderWidth={1}
            borderColor="coolGray.200"
          />
        </HStack>

        <VStack space={4}>
          <HStack space={4} justifyContent="space-between">
            {sponsors.slice(0, 2).map((item) => (
              <Box
                key={item.id}
                borderWidth={1}
                borderColor="coolGray.200"
                borderRadius="md"
                padding={1}
                alignItems="center"
                backgroundColor="coolGray.50"
                width="48%"
              >
                <Image
                  source={require('../assets/Thumbnail.png')}
                  alt={item.name}
                  width="100%"
                  height={60}
                  resizeMode="contain"
                />
              </Box>
            ))}
          </HStack>
          <HStack space={4} justifyContent="space-between">
            {sponsors.slice(2, 4).map((item) => (
              <Box
                key={item.id}
                borderWidth={1}
                borderColor="coolGray.200"
                borderRadius="md"
                padding={1}
                alignItems="center"
                backgroundColor="coolGray.50"
                width="48%"
              >
                <Image
                  source={require('../assets/Thumbnail.png')}
                  alt={item.name}
                  width="100%"
                  height={60}
                  resizeMode="contain"
                />
              </Box>
            ))}
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default SponsorsCard;
