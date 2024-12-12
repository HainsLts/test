import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  ISelectProps,
  NativeBaseProvider,
  Select,
  Icon,
  Box
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Dashboard from "@/assets/icons/dashboard.svg";

interface SelectComponentProps extends ISelectProps {
  options: {
    label: string,
    value: string
  }[],
  onValueChange: (value: string) => void
}

const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleValueChange = (value: string) => {
    if (props.selectedValue && props.selectedValue === value) {
      props.onValueChange('')
    } else {
      props.onValueChange(value)
    }
    onClose()
  }

  return (
    <NativeBaseProvider>
      <View>
        <Box position='relative'>
          <Select
            selectedValue={props.selectedValue}
            _selectedItem={{
              bg: "gray.200",
            }}
            dropdownIcon={<Icon as={Ionicons} name="chevron-down" size={5} color="#5A6672" style={styles.dropdownIcon} />}
            dropdownOpenIcon={<Icon as={Ionicons} name="chevron-up" size={5} color="#5A6672" style={styles.dropdownIcon} />}
            borderColor={isOpen ? '#1B51B3' : '#F0F2F5'}
            borderRadius={8}
            shadow={2}
            {...props}
            onOpen={onOpen}
            onClose={onClose}
            style={styles.selectComponent}
            placeholder="Unfilled"
            onValueChange={handleValueChange}
          > 
            {props.options?.length &&
              props.options.map((item, index) => (
                <Select.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
          </Select>
          <Dashboard fill="#1B51B3" style={styles.leftIcon} />
        </Box>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  selectComponent: {
    paddingLeft: 30,
  },
  dropdownIcon: {
    marginRight: 5      
  },
  leftIcon: {
    position: 'absolute',
    bottom: 15,
    left: 8,
  }
});

export default SelectComponent;
