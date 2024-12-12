import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextareaComponent from "@/src/components/common/TextAreaComponent";
import SearchBarComponent from "@/src/components/common/SearchBarComponent";
import SelectComponent from "@/src/components/common/SelectComponent";
import SelectWithSearchBarComponent from "@/src/components/common/SelectWithSearchBarComponent";
import {
  Box,
  Button,
  Modal,
  NativeBaseProvider,
  ScrollView
} from "native-base";

export default function DucPH() {
  const [valueTextArea, setValueTextArea] = useState("");
  const [valueSelect, setValueSelect] = useState("");
  const [valueSelectList, setValueSelectList] = useState("");
  const [valueCheckboxList, setValueCheckboxList] = useState("");
  const [isOpenSelectList, setIsOpenSelectList] = useState(false);
  const [isOpenCheckboxList, setIsOpenCheckboxList] = useState(false);

  const cancelRef = useRef(null);
  const cancelCheckboxRef = useRef(null);

  const dataSelect = [
    { label: "Select 1", value: "1" },
    { label: "Select 2", value: "2" },
    { label: "Select 3", value: "3" }
  ];

  const data = [
    {
      value: "1",
      label: "John Doe",
      image: "https://wallpaperaccess.com/full/317501.jpg"
    },
    { value: "2", label: "Jane Doe", image: "" },
    {
      value: "3",
      label: "Mark Smith",
      image: "https://wallpaperaccess.com/full/317501.jpg"
    },
    {
      value: "4",
      label: "Lucy Brown",
      image: "https://wallpaperaccess.com/full/317501.jpg"
    },
    {
      value: "5",
      label: "John Doe 11",
      image: "https://wallpaperaccess.com/full/317501.jpg"
    },
    { value: "6", label: "Jane Doe 22", image: "" },
    {
      value: "7",
      label: "Mark Smith 33",
      image: "https://wallpaperaccess.com/full/317501.jpg"
    },
    {
      value: "8",
      label: "Lucy Brown 44",
      image: "https://wallpaperaccess.com/full/317501.jpg"
    }
  ];
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.container}>
          <Text>Detail</Text>
          <StatusBar style="auto" />
          <TextareaComponent
            value={valueTextArea}
            placeholder="Placeholder"
            onChangeText={(text) => setValueTextArea(text)}
          />
          <SearchBarComponent placeholder="Search" />
          <SelectComponent
            selectedValue={valueSelect}
            options={dataSelect}
            onValueChange={(value: string) => setValueSelect(value)}
          />
          {/* <Box style={styles.boxButton}>
            <Button onPress={() => setIsOpenSelectList(!isOpenSelectList)}>
              List Select
            </Button>
            <Button onPress={() => setIsOpenCheckboxList(!isOpenCheckboxList)}>
              List Checkbox
            </Button>
          </Box> */}
        </View>
      </ScrollView>
      {/* <Modal
        isOpen={isOpenSelectList}
        onClose={() => setIsOpenSelectList(false)}
      >
        <Modal.Content style={{ maxHeight: 400, overflow: "hidden" }}>
          <Modal.CloseButton />
          <Modal.Header>Select list</Modal.Header>
          <Modal.Body>
            <Box>
              <SelectWithSearchBarComponent
                options={data}
                typeSelect="select"
                onChange={(value) =>
                  setValueSelectList(typeof value === "string" ? value : "")
                }
              />
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setIsOpenSelectList(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setIsOpenSelectList(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={isOpenCheckboxList}
        onClose={() => setIsOpenCheckboxList(false)}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Checkbox list</Modal.Header>
          <Modal.Body>
            <SelectWithSearchBarComponent
              options={data}
              typeSelect="checkbox"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={() => setIsOpenCheckboxList(false)}
                ref={cancelCheckboxRef}
              >
                Cancel
              </Button>
              <Button
                colorScheme="success"
                onPress={() => setIsOpenCheckboxList(false)}
              >
                Ok
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal> */}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 15,
    gap: 10
  },
  boxButton: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center"
  }
});
