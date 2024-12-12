import React, { useState } from "react";
import { Box, HStack, IconButton, Text, Circle } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "@/src/components/shared/Icon";
const Location = () => {
  const [totalDots, setTotalDots] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <Box bg="white" p={4} borderRadius="lg">
      <HStack justifyContent="space-between" alignItems="center">
        <IconButton
          icon={<MaterialIcons name="chevron-left" size={24} color="gray" />}
          onPress={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
          disabled={currentIndex == 0}
        />

        <Text fontSize="lg" fontWeight="bold">
          New York
        </Text>
        <IconButton
          icon={<MaterialIcons name="chevron-right" size={24} color="gray" />}
          onPress={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
          disabled={currentIndex === totalDots - 1}
        />
      </HStack>
      <HStack justifyContent="center" space={2} alignItems="center">
        <Icon name="fbNavigation" width={18} height={18} />

        {Array.from({ length: totalDots }).map((_, index) => (
          <Circle
            key={index}
            size="8px"
            bg={index === currentIndex ? "blue.500" : "gray.300"}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default Location;
