import React, { ReactElement } from "react";
import { Button, NativeBaseProvider, Box } from "native-base";
import { StyleSheet } from "react-native";

interface ButtonProps {
  label: string;
  isDisabled?: boolean;
  backgroundColor?: string;
  variant?: string;
  textColor?: string;
  isShowLeftIcon?: boolean;
  isShowRightIcon?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  backgroundColor,
  variant,
  textColor,
  isDisabled,
  isShowLeftIcon,
  isShowRightIcon,
  leftIcon,
  rightIcon,
  onPress
}) => {
  return (
    <NativeBaseProvider>  
        <Button
          isDisabled={isDisabled ? true : false}
          leftIcon={isShowLeftIcon ? leftIcon : undefined}
          rightIcon={isShowRightIcon ? rightIcon : undefined}
          colorScheme={backgroundColor}
          style={styles.borderButton}
          variant={variant ? variant : "solid"}
          onPress={() => onPress()}
          _text={textColor ? { color: textColor } : { color: "white" }}
        >
        {label}
        </Button>   
    </NativeBaseProvider>
  );
};

export default ButtonComponent;
const styles = StyleSheet.create({
  borderButton: {
    borderRadius: 12
  }
});
