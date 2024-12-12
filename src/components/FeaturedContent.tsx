import React from 'react';
import { NativeBaseProvider, Box, Text, VStack, HStack, Image, Pressable, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const FeaturedContent: React.FC = () => {
  const featuredItems = [
    { title: 'Live coverage', image: 'https://via.placeholder.com/150', id: 1 },
    { title: 'Hurricane prep', image: 'https://via.placeholder.com/150', id: 2 },
    { title: 'Severe weather', image: 'https://via.placeholder.com/150', id: 3 },
    { title: 'Nickelbloc...', image: 'https://via.placeholder.com/150', id: 4 },
  ];

  return (
    <NativeBaseProvider>
      <Box
        borderWidth={1}
        borderColor="coolGray.200"
        borderRadius="lg"
        padding={3}
        backgroundColor="white"
        shadow={2}
        width="90%"
        alignSelf="center"
      >
        <HStack justifyContent="space-between" alignItems="center" marginBottom={3}>
          <Text fontSize="sm" fontWeight="500" color="rgba(90, 102, 114, 1)">
            FEATURED CONTENT
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
            {featuredItems.slice(0, 2).map((item) => (
              <Pressable
                key={item.id}
                width="48%"
              >
                <HStack
                  borderWidth={1}
                  borderColor="rgba(240, 242, 245, 1)"
                  borderRadius="lg"
                  padding={2}
                  alignItems="center"
                  backgroundColor="coolGray.50"

                >
                  <Image
                    source={require('../assets/Placeholder.png')}
                    alt={item.title}
                    width={7}
                    height={7}
                    borderRadius="md"
                    resizeMode="cover"
                  />
                  <Text fontSize="sm" fontWeight="400" marginLeft={2} color="coolGray.800" marginTop={1}>
                    {item.title}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </HStack>
          <HStack space={2} justifyContent="space-between">
            {featuredItems.slice(2, 4).map((item) => (
              <Pressable
                key={item.id}
                width="48%"
              >
                <HStack
                  borderWidth={1}
                  borderColor="rgba(240, 242, 245, 1)"
                  borderRadius="lg"
                  padding={2}
                  backgroundColor="coolGray.50"

                >
                  <Image
                    source={require('../assets/Placeholder.png')}
                    alt={item.title}
                    width={7}

                    height={7}
                    borderRadius="md"
                    resizeMode="cover"
                  />
                  <Text fontSize="sm" fontWeight="400" color="coolGray.800" marginLeft={2} marginTop={1}>
                    {item.title}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default FeaturedContent;
