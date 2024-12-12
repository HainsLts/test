import React from "react";
import {
  HStack,
  Switch,
  Text,
  ISwitchProps,
  NativeBaseProvider
} from "native-base";

interface ToggleSwitchProps extends ISwitchProps {
  label: string;
  isDisabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  isDisabled = false,
  ...props
}) => {
  return (
    <NativeBaseProvider>
      <HStack alignItems="center" space={4}>
        <Text fontSize="md" color={isDisabled ? "gray.400" : "gray.800"}>
          {label}
        </Text>
        <Switch
          size="md"
          offTrackColor={isDisabled ? "gray.200" : "gray.300"}
          onTrackColor={isDisabled ? "gray.200" : "blue.500"}
          isDisabled={isDisabled}
          {...props}
        />
      </HStack>
    </NativeBaseProvider>
  );
};

export default ToggleSwitch;
