import React from 'react';
import { Box, Text, IconButton, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface RadarCardProps {
  title?: string;
  mapUrl?: string;
  onPressDetails?: () => void;
}

const RadarCard: React.FC<RadarCardProps> = ({ title, mapUrl, onPressDetails }) => {
  return (
    <Box
      borderWidth={1}
      borderColor="coolGray.200"
      borderRadius="lg"
      shadow={2}
      backgroundColor="white"
      width="90%"
      alignSelf="center"
      overflow="hidden"
    >
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" padding={3}>
        <Text fontSize="md" fontWeight="500" color="rgba(90, 102, 114, 1)">
          Radar
        </Text>
        <IconButton
          icon={<Ionicons color="rgba(39, 115, 255, 1)" name="chevron-forward" size={20} />}
          borderRadius="10"
          onPress={onPressDetails}
          borderWidth={1}
          borderColor="coolGray.200"
          backgroundColor="coolGray.50"
        />
      </Box>

      <Box paddingX={4} paddingBottom={4}>
        <Image
          source={{ uri: mapUrl }}
          alt="Radar Map"
          borderRadius="lg"
          borderWidth={1}
          borderColor="purple.300"
          shadow={2}
          height={200}
          resizeMode="cover"
        />
        
      </Box>
    </Box>
  );
};

export default RadarCard;
