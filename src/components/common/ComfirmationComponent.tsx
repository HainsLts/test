import React from "react";
import {
  Button,
  Modal,
  Box,
  HStack,
  NativeBaseProvider,
} from "native-base";
import { StyleSheet } from "react-native";

interface ConfirmationModalProps {
  isOpen: boolean;
  isHasContent?: boolean;
  onClose: () => void;
  onCancel: () => void;
  onSave: () => void;
  content?: string;
  saveText?: string;
  cancelText?: string;
  saveButtonColor?: string;
  cancelButtonColor?: string;
  saveTextColor?: string;
  cancelTextColor?: string;
  contentSlot?: React.ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onCancel,
  onSave,
  saveText,
  cancelText,
  saveButtonColor,
  cancelButtonColor,
  saveTextColor,
  cancelTextColor,
  contentSlot
}) => {
  return (
    <NativeBaseProvider>
       <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.Header>Confirmation</Modal.Header>
        <Modal.Body>
         {contentSlot ? contentSlot : <Box alignItems="center">Are you sure you want to proceed?</Box>}
        </Modal.Body>
        <Modal.Footer>
          <HStack space={4} justifyContent="center" width="100%">
            <Button
              variant="outline"
              flex={1}
              onPress={onCancel}
              borderColor="blue.500"
              style={styles.borderButton}
              colorScheme={cancelButtonColor ? cancelButtonColor : "white"}
              _text={
                cancelTextColor
                  ? { color: cancelTextColor }
                  : { color: "blue.500" }
              }
            >
              {cancelText ? cancelText : "Cancle"}
            </Button>
            <Button
              flex={1}
              style={styles.borderButton}
              colorScheme={saveButtonColor ? saveButtonColor : "blue"}
              onPress={onSave}
              _text={
                saveTextColor ? { color: saveTextColor } : { color: "white" }
              }
            >
              {saveText ? saveText : "Save"}
            </Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
    </NativeBaseProvider>
   
  );
};
export default ConfirmationModal;

const styles = StyleSheet.create({
  borderButton: {
    borderRadius: 12
  }
});
