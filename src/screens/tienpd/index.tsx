import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Icon,
  NativeBaseProvider,
  VStack,
  Box,
  ScrollView,
  Radio,
  HStack
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ConfirmationModal from "@/src/components/common/ComfirmationComponent";
import ButtonComponent from "@/src/components/common/CustomButtonComponent";
import CustomCheckbox from "@/src/components/common/CustomCheckboxComponent";
import ToggleSwitch from "@/src/components/common/CustomToggleSwitchComponent";
import RadioButton from "@/src/components/common/RadioButtonComponent";
import SliderChart from "@/src/components/common/SliderComponent";
import TooltipReusable from "@/src/components/common/TooltipComponent";

export default function TienPD() {
  const handlePress = () => {
    console.log("Selected option:");
  };
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái modal

  const handleCancel = () => {
    console.log("Action cancelled.");
    setIsModalOpen(false);
  };

  const handleSave = () => {
    console.log("Changes saved.");
    setIsModalOpen(false);
  };

  const [checkboxValues, setCheckboxValues] = useState<{
    [key: string]: boolean;
  }>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });

  const handleCheckboxChange = (key: string, isChecked: boolean) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [key]: isChecked
    }));
  };

  const [selectedValue, setSelectedValue] = useState<string>("Default 1");

  const [isToggled1, setIsToggled1] = useState(true);
  const [isToggled2, setIsToggled2] = useState(false);

  const sliderData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <View style={styles.container}>
      <ScrollView w={"4/5"} h="100">
        <Text>TienPD</Text>
        <StatusBar style="auto" />
        <ButtonComponent
          label="Label"
          onPress={handlePress}
          backgroundColor="#2773FF"
          isShowLeftIcon
          isShowRightIcon
          leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
          rightIcon={<Icon as={Ionicons} name="chevron-down" size="sm" />}
        />
        <ButtonComponent
          label="Label"
          onPress={handlePress}
          backgroundColor="blue"
          isShowLeftIcon
          isShowRightIcon
          leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
          rightIcon={<Icon as={Ionicons} name="chevron-up" size="sm" />}
        />
        <ButtonComponent
          label="Label"
          onPress={handlePress}
          backgroundColor="blue"
          isShowLeftIcon
          isShowRightIcon
          variant="outline"
          textColor="#1B51B3"
          leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
          rightIcon={<Icon as={Ionicons} name="chevron-down" size="sm" />}
        />

        <NativeBaseProvider>
          <Button onPress={() => setIsModalOpen(true)}>
            Open Confirmation Modal
          </Button>
          {/* Checkbox 1 */}
          <CustomCheckbox
            label="Checkbox 1"
            isChecked={checkboxValues.checkbox1}
            value=""
            onChange={(isChecked) =>
              handleCheckboxChange("checkbox1", isChecked)
            }
          />

          {/* Checkbox 2 */}
          <CustomCheckbox
            label="Checkbox 2"
            value=""
            isChecked={checkboxValues.checkbox2}
            onChange={(isChecked) =>
              handleCheckboxChange("checkbox2", isChecked)
            }
          />

          {/* Checkbox 3 */}
          <CustomCheckbox
            label="Checkbox 3"
            value=""
            isDisabled
            isChecked={checkboxValues.checkbox3}
            onChange={(isChecked) =>
              handleCheckboxChange("checkbox3", isChecked)
            }
          />
          <Text>Selected Values:</Text>
          <Text>
            {Object.entries(checkboxValues)
              .filter(([key, value]) => value)
              .map(([key]) => key)
              .join(", ") || "None"}
          </Text>
        </NativeBaseProvider>

        <ConfirmationModal
          onSave={handleSave}
          isOpen={isModalOpen}
          onCancel={handleCancel}
          onClose={handleSave}
        />

        <ToggleSwitch
          label="Default"
          isChecked={isToggled1}
          onToggle={(value) => setIsToggled1(value)}
        />
        <ToggleSwitch
          label="Default"
          isChecked={isToggled2}
          onToggle={(value) => setIsToggled2(value)}
        />
        <ToggleSwitch label="Disabled" isDisabled />
        <ToggleSwitch label="Disabled" isChecked isDisabled />

        <Box flex={1} p={4} bg="coolGray.100" justifyContent="center">
          <VStack space={6}>
            <Radio.Group
              name="defaultRadioGroup"
              value={selectedValue}
              onChange={(nextValue) => setSelectedValue(nextValue)}
            >
              <RadioButton label="Default 1" value="Default 1" />
              <RadioButton label="Default 2" value="Default 2" />
            </Radio.Group>
            <Radio.Group name="disabledRadioGroup" value="Disabled 1">
              <RadioButton label="Disabled 1" value="Disabled 1" isDisabled />
              <RadioButton label="Disabled 2" value="Disabled 2" isDisabled />
            </Radio.Group>
          </VStack>
          
        </Box>
        <Box flex={1} bg="coolGray.100">
        {sliderData.map((value, index) => (
          <HStack key={index} alignItems="center" space={4}>
             <SliderChart value={value} />
          </HStack>
        ))}
       
      </Box>

      <Box flex={1} bg="coolGray.100" justifyContent="center" alignItems="center">
        <VStack space={6}>
          {/* Tooltip trên */}
          <TooltipReusable label="Account is hidden by user" placement="top">
            <Button>Hover Me (Top)</Button>
          </TooltipReusable>

          {/* Tooltip bên trái */}
          <TooltipReusable label="Account is hidden by user" placement="left">
            <Button>Hover Me (Left)</Button>
          </TooltipReusable>

          {/* Tooltip dưới */}
          <TooltipReusable label="Account is hidden by user" placement="bottom">
            <Button>Hover Me (Bottom)</Button>
          </TooltipReusable>
        </VStack>
      </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
