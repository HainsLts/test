import React from "react";
import {
  Checkbox,
  HStack,
  Text,
  ICheckboxProps,
  NativeBaseProvider
} from "native-base";

interface CustomCheckboxProps extends ICheckboxProps {
  label: string;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  isDisabled = false,
  onChange,
  ...props
}) => {
  return (
    <NativeBaseProvider>
      <HStack alignItems="center" space={3}>
        <Text fontSize="md" color={isDisabled ? "gray.400" : "gray.800"}>
          {label}
        </Text>
        <Checkbox
          borderWidth={2}
          borderRadius="md"
          isDisabled={isDisabled}
          borderColor="blue.500"
          _checked={{
            bg: "transparent",
            borderColor: "blue.500",
            _icon: {
              color: "blue.500"
            }
          }}
          onChange={(isChecked) => {
            if (onChange) {
              onChange(isChecked);
            }
          }}
          {...props}
        />
      </HStack>
    </NativeBaseProvider>
  );
};

export default CustomCheckbox;
