import React from "react";
import { Image, ImageProps, StyleSheet } from "react-native";
import { images } from "@/src/assets/ImageAssets";

type ImageName = keyof typeof images;

interface AppImageProps extends Omit<ImageProps, "source"> {
  name: ImageName;
}

const AppImage: React.FC<AppImageProps> = ({ name, style, ...props }) => {
  const ImageSource = images[name];
  if (!ImageSource) {
    console.error(`Image "${name}" not found.`);
    return null;
  }
  return (
    <Image source={ImageSource} style={[styles.default, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  default: {
    resizeMode: "contain"
  }
});

export default AppImage;
