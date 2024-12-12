import React from 'react';
import { NativeBaseProvider, Box, Text, Button } from 'native-base';
import { ImageBackground, StyleSheet } from 'react-native';

interface EmitComponentProps {
  data?: Record<string, any>;
  onSubmit?: (data: Record<string, any>) => void;
}
const CallToActionCard: React.FC<EmitComponentProps> = ({ data, onSubmit }) => {
  return (
    <NativeBaseProvider>
      <Box
        borderWidth={1}
        borderColor="coolGray.200"
        borderRadius="lg"
        overflow="hidden"
        shadow={2}
        width="90%"
        alignSelf="center"
      >
        <ImageBackground
          source={require('../assets/backgroundActionCard.png')} 
          style={styles.backgroundImage}
        >
          <Box
            padding={4}
            borderRadius="lg"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text fontSize="md" fontWeight="600" color="coolGray.800">
                Take your website to the
              </Text>
              <Text fontSize="md" fontWeight="600" color="coolGray.800">
                next level
              </Text>
            </Box>

            <Button
              size="sm"
              colorScheme="blue"
              borderRadius="lg"
              _text={{ fontWeight: 'bold', color: 'white' }}
              onPress={() => {
                if (onSubmit) {
                  onSubmit(data || {});
                }
              }}
            >
              Get started
            </Button>
          </Box>
        </ImageBackground>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
  },
});

export default CallToActionCard;
