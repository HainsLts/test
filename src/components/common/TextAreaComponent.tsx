import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextArea, ITextAreaProps, Box, NativeBaseProvider } from "native-base";
import ResizeCorner from '@/assets/icons/resize-corner.svg';

const TextareaComponent: React.FC<ITextAreaProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <NativeBaseProvider>
      <View>
        <Box position="relative" w={props.w}>
          <TextArea
            value={props.value}
            h={120}
            w="100%"
            tvParallaxProperties={undefined}
            onTextInput={undefined}
            autoCompleteType={undefined}
            {...props}
            backgroundColor={props.isDisabled ? '#FAFBFE' : ''}
            borderColor={isFocused ? '#1B51B3' : '#F0F2F5'}
            focusOutlineColor={isFocused ? '#1B51B3' : '#F0F2F5'}
            borderRadius={8}
            fontSize={14}
            placeholderTextColor={props.isDisabled ? '#AFB8C0' : (isFocused ? '#171E27' : '#677A8E')}
            color={props.isDisabled ? '#AFB8C0' : (isFocused ? '#171E27' : '#677A8E')}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <ResizeCorner style={styles.resizeIcon} />
        </Box>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  resizeIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 25,
    height: 25
  },
});

export default TextareaComponent;