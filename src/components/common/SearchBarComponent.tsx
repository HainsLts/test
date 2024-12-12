import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  IInputProps,
  NativeBaseProvider,
  Input,
  Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const SearchBarComponent: React.FC<IInputProps> = (props) => {
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
        <Input
          {...props}
          style={styles.searchBar}
          focusOutlineColor={isFocused ? '#1B51B3' : '#F0F2F5'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          shadow={props.isDisabled ? 'none' : 1}
          borderRadius="8px"
          backgroundColor={props.isDisabled ? '#FAFBFE' : '#ffffff'}
          px="8px"
          py="10px"
          InputLeftElement={
            <Icon as={Ionicons} name="search" size={5} color={ isFocused ? '#1B51B3' : '#5A6672' } style={styles.searchIcon} />
          }
        />
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    boxShadow: '0px 1px 3px 0px #677A8E3D',
    borderColor: '#F0F2F5',
    width: "100%",
    backgroundColor: 'transparent'
  },
  searchIcon: {
    marginLeft: 5      
  }
});

export default SearchBarComponent;
