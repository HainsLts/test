import React from "react";
import {
  HStack,
  Radio,
  Text,
  VStack,
  IRadioProps,
  NativeBaseProvider
} from "native-base";

interface RadioButtonProps extends IRadioProps {
  label: string;
  isDisabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
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
        <Radio
          value={label}
          isDisabled={isDisabled}
          _checked={{
            bg: "transparent",
            borderColor: isDisabled ? "gray.300" : "blue.500",
            _icon: {
              color: isDisabled ? "gray.500" : "blue.500"
            }
          }}
          _icon={{
            size: "xs"
          }}
          _disabled={{
            bg: "gray.100",
            borderColor: "gray.300"
          }}
          {...props}
        />
      </HStack>
    </NativeBaseProvider>
  );
};

export default RadioButton;
