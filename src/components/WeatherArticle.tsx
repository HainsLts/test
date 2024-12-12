import React from 'react';
import { NativeBaseProvider, Box, Text, Image, VStack, HStack, Link } from 'native-base';

const WeatherArticle: React.FC = () => {
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
        {/* Hình ảnh */}
        <Box borderRadius="md" marginBottom={4}>
          <Image
            source={require('../assets/Thumbnail2.png')}
            alt="Severe Weather"
            width="100%"
            height={200}
            resizeMode="cover"
          />
        </Box>

        {/* Nội dung bài viết */}
        <VStack space={2}>
          <Text fontSize="lg" fontWeight="bold" color="coolGray.800">
            Severe weather
          </Text>
          <Text fontSize="sm" color="coolGray.600" numberOfLines={3}>
            A line of heavy storms that moved through the Midwest unleashed damaging winds gusts,
            multiple...
          </Text>
        </VStack>

        {/* Đường dẫn "Read more" */}
        <HStack marginTop={4} justifyContent="space-between" alignItems="center">
          <Link
            href="#"
            _text={{
              fontSize: 'sm',
              fontWeight: '500',
              color: 'blue.500',
            }}
            isExternal
          >
            Read more{' '}
            <Text fontSize="md" color="blue.500">
              ↗
            </Text>
          </Link>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default WeatherArticle;
