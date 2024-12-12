import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Input,
  FlatList,
  HStack,
  Radio,
  Icon,
  Checkbox,
  Text
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Badge from "@/src/components/common/Badge";

const TypeSelect = {
  SELECT: "select",
  CHECKBOX: "checkbox"
};
interface Options {
  label: string;
  value: string;
  image?: string;
}

class PropsSelectWithSearchBar {
  typeSelect: string = TypeSelect.SELECT;
  options: Options[] = [];
  onChange?: ((value: string | string[]) => void) | undefined;
}

const SelectWithSearchBarComponent: React.FC<PropsSelectWithSearchBar> = (
  props
) => {
  const [selected, setSelected] = React.useState("");
  const [checkbox, setCheckbox] = useState([] as string[]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = props.options.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const onChangeCheckBox = (value: string) => {
    setCheckbox((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    if (props.onChange && props.typeSelect === TypeSelect.SELECT) {
      props.onChange(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (props.onChange && props.typeSelect === TypeSelect.CHECKBOX) {
      props.onChange(checkbox);
    }
  }, [checkbox]);

  return (
    <NativeBaseProvider>
      <Box p="4" bg="white" borderRadius="lg" shadow="2" width="90%" mx="auto">
        <Input
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          variant="outline"
          mb="4"
          InputLeftElement={
            <Icon
              as={Ionicons}
              name="search"
              size={5}
              color="#5A6672"
              style={styles.searchIcon}
            />
          }
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.value}
          nestedScrollEnabled
          style={{ maxHeight: 200 }}
          renderItem={({ item }) => (
            <HStack
              alignItems="center"
              space={3}
              p="2"
              borderBottomWidth="1"
              borderBottomColor="gray.100"
            >
              {props.typeSelect === TypeSelect.SELECT && (
                <Radio.Group
                  name="selectOption"
                  accessibilityLabel="Select an option"
                  value={selected}
                  onChange={(value) => setSelected(value)}
                >
                  <Radio value={item.value} size="sm">
                    <Badge label={item.label} source={item.image} />
                  </Radio>
                </Radio.Group>
              )}
              {props.typeSelect === TypeSelect.CHECKBOX && (
                <Checkbox
                  value={item.value}
                  onChange={() => onChangeCheckBox(item.value)}
                >
                  <Text>{item.label}</Text>
                </Checkbox>
              )}
            </HStack>
          )}
        />
      </Box>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {

  },
  searchIcon: {
    marginLeft: 5
  },
  itemSelect: {
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#F8FAFF"
  },
  imageItem: {
    width: 24,
    height: 24,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  }
});

export default SelectWithSearchBarComponent;
