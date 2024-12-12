import React from "react";
import { Box, Image, Text } from "native-base"
import { StyleSheet } from "react-native";

class BadgePops {
  label: string = '';
  source?: string = '';
  isBold?: boolean = false;
}
const AvatarComponent: React.FC<BadgePops> = (props) => {
  return (
    <Box style={styles.itemSelect}>
      {props.source && 
        <Image source={{ uri: props.source }} alt="Image" fontWeight={props.isBold ? '500' : '400'} style={styles.imageItem} />
      }
      <Text flex={1}>
        {props.label}
      </Text>
    </Box>
  )
}

const styles = StyleSheet.create({
  itemSelect: {
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    backgroundColor: '#F8FAFF'
  }, 
  imageItem: {
    width: 24,
    height: 24,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  }
});

export default AvatarComponent;