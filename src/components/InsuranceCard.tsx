import React from "react";
import { Box, Text, Center, NativeBaseProvider } from "native-base";
import { Image } from "react-native";
interface EmitComponentProps {
  data?: Record<string, any>;
}
const InsuranceCard: React.FC<EmitComponentProps> = ({ data }) => {
  return (
    <NativeBaseProvider>
      <Box
        borderWidth={1}
        borderColor="coolGray.100"
        borderRadius="lg"
        padding={4}
        shadow={2}
        margin="auto"
        backgroundColor="white"
        width="90%"
        alignSelf="center"
      >
        {/* Logo */}
        <Center alignItems="center" marginBottom={4}>
          <Image
            resizeMode="cover"
            source={require("../assets/Thumbnail.png")}
            alt="State Farm Logo"
          />
        </Center>

        {/* Title */}
        <Text fontSize="lg" fontWeight="bold" marginBottom={2}>
          State Farm
        </Text>

        {/* Description */}
        <Text fontSize="sm" color="coolGray.600" numberOfLines={2}>
          State Farm Insurance is a group of mutual insurance companies
          throughout the United States...
        </Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default InsuranceCard;
